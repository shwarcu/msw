import { PlaywrightTestConfig, devices } from '@playwright/test'

const config: PlaywrightTestConfig = {
  workers: 1,
  globalSetup: require.resolve('./playwright.setup.ts'),
  forbidOnly: !!process.env.CI,
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
}

export default config
