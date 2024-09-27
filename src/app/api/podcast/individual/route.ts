import AjaxResult from '@/lib/server/ajax-result';
import { NextRequest } from 'next/server';
import puppeteer, { Browser, Page } from 'puppeteer';

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const individualUrl = url.searchParams.get('individualUrl');
  if (!individualUrl) return AjaxResult.fail(900, '缺少参数');
  return AjaxResult.ok(await scrap(individualUrl));
}

async function scrap(url: string) {
  let browser: Browser | undefined;
  try {
    browser = await puppeteer.launch();
    const page: Page = await browser.newPage();
    await page.goto(url);
    const episodesList = await page.$('ol[data-testid="episodes-list"]');
    if (episodesList) {
      // 提取链接和 span 的文本内容
      const linkElements = await page.evaluate((list) => {
        const items = Array.from(list.querySelectorAll('li'));
        return items.map((item) => {
          const a = item.querySelector('a');
          const span = a?.querySelector('span');
          return {
            href: a?.getAttribute('href') || '',
            text: span?.textContent || null,
          };
        });
      }, episodesList);

      return linkElements;
    }
  } catch (e) {
    console.error(e);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
