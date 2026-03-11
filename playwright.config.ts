import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './',
  testMatch: /\.stories\.ts$/,

  workers: process.env.CI ? 4 : 2,
  fullyParallel: true,

  retries: process.env.CI ? 2 : 0,

  timeout: 30000,

  use: {
    baseURL: 'http://localhost:6006',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

  webServer: {
    command: 'npm run storybook:start',
    port: 6006,
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
