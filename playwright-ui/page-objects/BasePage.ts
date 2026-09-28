import { Page, Locator } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  readonly baseURL: string;

  constructor(page: Page, baseURL: string = '') {
    this.page = page;
    this.baseURL = baseURL;
  }

  async goto(path: string = '/') {
    const url = this.baseURL ? `${this.baseURL}${path}` : path;
    await this.page.goto(url);
    await this.page.waitForLoadState('domcontentloaded');
  }

  async waitForVisible(locator: Locator, timeout?: number) {
    await locator.waitFor({ state: 'visible', timeout });
  }
}
