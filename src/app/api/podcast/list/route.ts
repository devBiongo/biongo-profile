import AjaxResult from '@/lib/server/ajax-result';
import { NextRequest } from 'next/server';

import puppeteer, { Browser, Page, ElementHandle } from 'puppeteer';

interface DataItem {
  url: string;
  name: string;
}

interface ApiResponse {
  results: {
    groups: Array<{
      groupId: string;
      data: Array<{
        attributes: {
          url: string;
          name: string;
        };
      }>;
    }>;
  };
}

async function scrap(content: string): Promise<DataItem[] | undefined> {
  let browser: Browser | undefined;
  try {
    browser = await puppeteer.launch();
    const page: Page = await browser.newPage();
    await page.goto('https://podcasts.apple.com/jp/search');

    const inputElement: ElementHandle<HTMLInputElement> | null = await page.$(
      'input[placeholder="検索"]'
    );
    if (!inputElement) return;

    await inputElement.click();
    await inputElement.type(content);
    await inputElement.press('Enter');

    const matchedResponse = await page.waitForResponse(
      (response) => {
        if (
          response.url().includes('/v1/catalog/jp/search/groups') &&
          response.status() === 200
        ) {
          return true;
        }
        return false;
      },
      { timeout: 5000 }
    );

    if (!matchedResponse) return;

    const data: ApiResponse = await matchedResponse.json();

    const index = data.results.groups.findIndex(
      (group) => group.groupId === 'show'
    );
    if (index === -1) return;

    const resultData = data.results.groups[index].data.map((item) => ({
      url: item.attributes.url,
      name: item.attributes.name,
    }));

    return resultData;
  } catch (e) {
    console.error(e);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

export async function GET(request: NextRequest) {
  // 获取查询参数
  const url = new URL(request.url);
  const content = url.searchParams.get('keyword'); // 获取名为 'param' 的查询参数

  // 使用获取的查询参数进行处理
  const result = await scrap(String(content));

  return AjaxResult.ok(result);
}
