import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: process.env.CI ? 120000 : 60000,
  expect: { timeout: process.env.CI ? 30000 : 15000 },
  fullyParallel: false,
  reporter: [
    ['html', { open: 'never', outputFolder: 'playwright-report' }],
    ['json', { outputFile: 'playwright-results.json' }],
  ],
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost',
    headless: true,
    ignoreHTTPSErrors: true,
    trace: 'on-first-retry',
    screenshot: 'on',
    video: 'on',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
