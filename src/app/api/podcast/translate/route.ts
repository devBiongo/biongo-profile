import puppeteer from 'puppeteer';
import path from 'path';
import axios from 'axios';
import { execFile } from 'child_process';
import { NextRequest } from 'next/server';
import AjaxResult from '@/lib/server/ajax-result';
import {
  checkFileExists,
  deleteFile,
  downloadFileToLocal,
  readLocalFileBuffer,
  resolveStaticResourcePath,
} from '@/lib/server/podcast';
import { isDev } from '@/lib/common';

export async function POST(request: NextRequest) {
  const { targetUrl } = await request.json();
  if (!targetUrl) return AjaxResult.fail(900, '请提供播客网址');

  const episodeUrlSplices = String(targetUrl).split('?')[0].split('/');
  const showId = episodeUrlSplices[episodeUrlSplices.length - 1];
  if (!showId.startsWith('id')) {
    return AjaxResult.fail(902, '解析路径时出现错误');
  }

  const resolveDirPath = resolveStaticResourcePath(showId.replace('id', ''));
  const episodeId = String(targetUrl).split('?')[1].replaceAll('i=', '');

  const srtFilePath = path.join(resolveDirPath, `${episodeId}.srt`);

  if (await checkFileExists(srtFilePath)) {
    return AjaxResult.ok((await readLocalFileBuffer(srtFilePath))!.toString());
  }

  // 如果没有既存的srt资源文件则去指定的网址下载资源并且翻译成srt文件
  const audioUrl = await findAudioUrl(targetUrl);
  if (!audioUrl) {
    return AjaxResult.fail(901, '请提供正确的播客网址');
  }

  const resource = await downloadAudioBufferByWebUrl(audioUrl);
  if (!resource) {
    return AjaxResult.fail(902, '下载目标资源失败');
  }

  const mp3FilePath = path.join(resolveDirPath, `${episodeId}.mp3`);

  await downloadFileToLocal(resource, mp3FilePath);

  const flagFilePath = path.join(resolveDirPath, `${episodeId}.txt`);
  runWhisperFaster(flagFilePath, mp3FilePath, resolveDirPath, 'large-v2');

  return AjaxResult.ok(null, 201, '拼命加载中,请稍后再试...');
}

async function findAudioUrl(webUrl: string) {
  let browser;
  try {
    browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(webUrl, { waitUntil: 'networkidle0' });
    const button = await page.$('button[data-testid="button-base"]');
    if (!button) {
      throw new Error('类选择器未曾找到目标元素');
    }
    await button.click();
    await page.waitForSelector('audio#apple-music-player');
    const audioElement = await page.$('audio#apple-music-player');
    if (!audioElement) {
      throw new Error('类选择器未曾找到目标元素');
    }
    return await page.evaluate((el) => el.src, audioElement);
  } catch (e) {
    console.error('模拟浏览器操作失败...', e);
  } finally {
    await browser?.close();
  }
}

async function downloadAudioBufferByWebUrl(
  webUrl: string
): Promise<Buffer | null> {
  try {
    const response = await axios.get(webUrl, {
      responseType: 'stream',
    });

    if (response.status !== 200) {
      console.error(
        'Failed to get a response from the URL:',
        response.statusText
      );
      return null;
    }

    const chunks: Buffer[] = [];
    let totalLength = 0;

    response.data.on('data', (chunk: Buffer) => {
      chunks.push(chunk);
      totalLength += chunk.length;
    });
    console.log(totalLength);

    return new Promise<Buffer | null>((resolve, reject) => {
      response.data.on('end', () => {
        const completeBuffer = Buffer.concat(chunks);
        console.log(`Buffer length: ${completeBuffer.length}`);
        resolve(completeBuffer);
      });

      response.data.on('error', (err: unknown) => {
        console.error('Error in response data stream:', err);
        reject(err);
      });
    });
  } catch (error) {
    console.error('Error fetching audio buffer:', error);
    return null;
  }
}

async function runWhisperFaster(
  flagFilePath: string,
  inputFile: string,
  outputDir: string,
  model: string
): Promise<void> {
  if (isDev()) return;
  if (await checkFileExists(flagFilePath)) {
    return;
  }

  await downloadFileToLocal(Buffer.from([1, 2, 3]), flagFilePath);

  // 构建命令行参数
  const command = 'whisper-faster';
  const args = [inputFile, '-o', outputDir, '--model', model];
  const commandString = `${command} ${args.join(' ')}`;

  console.log('Executing command:', commandString);

  return new Promise((resolve, reject) => {
    execFile(command, args, (error, stdout, stderr) => {
      deleteFile(inputFile);
      deleteFile(flagFilePath);
      if (error) {
        console.error('Error executing command:', error);
        reject(error);
        return;
      }

      // 直接打印标准输出
      if (stdout) {
        console.log('Standard Output:', stdout);
      }

      // 直接打印标准错误输出
      if (stderr) {
        console.error('Standard Error Output:', stderr);
      }

      resolve();
    });
  });
}
