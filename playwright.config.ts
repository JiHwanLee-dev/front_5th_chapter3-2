import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/e2e',
  use: {
    baseURL: 'http://localhost:5173',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  timeout: 30000,
  expect: {
    timeout: 10000,
  },
  webServer: [
    {
      command: 'pnpm dev',
      port: 5173,
      reuseExistingServer: !process.env.CI,
    },
    {
      command: 'node server_e2e.js',
      port: 3001,
      reuseExistingServer: !process.env.CI,
    },
  ],
});
