import { test, expect } from '@playwright/test';
import { BasePage } from '../page-objects/BasePage';

test.describe('Generated Playwright UI Workflow', () => {
  test('TC_001: placeholder smoke navigation', async ({ page }) => {
    const basePage = new BasePage(page);

    await test.step('Step 1: Open the application.', async () => {
      await basePage.goto('/');
    });

    await test.step('Step 2: Verify the page loaded.', async () => {
      await expect(page).toHaveURL(/.+/);
    });
  });
});
