exports.config = {
  tests: './packages/tests/*.ts',
  output: './packages/output',
  helpers: {
    Playwright: {
      url: 'https://www.tumblr.com/',
      show: true,
      browser: 'chromium',
      fullPageScreenshots: true,
      uniqueScreenshotNames: true,
      headless: true
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'Tumblr tests',
  plugins: {
    pauseOnFail: {},
    allure: {
      enabled: true,
      outputDir: './packages/allure',
    },
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  },
  require: ['ts-node/register'],
}