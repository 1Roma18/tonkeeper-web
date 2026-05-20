"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
exports.__esModule = true;
var test_1 = require("@playwright/test");
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
var dotenv_1 = __importDefault(require("dotenv"));
var path_1 = __importDefault(require("path"));
dotenv_1["default"].config({ path: path_1["default"].resolve(__dirname, '.env') });
/**
 * See https://playwright.dev/docs/test-configuration.
 */
exports["default"] = (0, test_1.defineConfig)({
    testDir: './tests',
    testIgnore: process.env.TRANSACTION_TESTS != 'true' ? '**/Transactions/**' : undefined,
    /* Run tests in files in parallel */
    fullyParallel: !process.env.CI,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: process.env.CI ? 2 : 0,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 5 : undefined,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: process.env.CI
        ? [['github'], ['list'], ['json', { outputFile: 'results.json' }]]
        : [['html'], ['list']],
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        /* Base URL to use in actions like `await page.goto('/')`. */
        baseURL: (_a = process.env.BASE_APP_URL) !== null && _a !== void 0 ? _a : 'https://wallet.tonkeeper.com',
        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'on-first-retry'
    },
    // Set timeout 30 sec for each test
    timeout: 30 * 1000,
    /* Configure projects for major browsers */
    projects: [
        {
            name: 'chromium',
            use: __assign({}, test_1.devices['Desktop Chrome'])
        },
        {
            name: 'firefox',
            use: __assign({}, test_1.devices['Desktop Firefox'])
        }
        // {
        //     name: 'webkit',
        //     use: { ...devices['Desktop Safari'] }
        // },
        /* Test against mobile viewports. */
        // {
        //   name: 'Mobile Chrome',
        //   use: { ...devices['Pixel 5'] },
        // },
        // {
        //   name: 'Mobile Safari',
        //   use: { ...devices['iPhone 12'] },
        // },
        /* Test against branded browsers. */
        // {
        //     name: 'Microsoft Edge',
        //     use: { ...devices['Desktop Edge'], channel: 'msedge' }
        // },
        // {
        //     name: 'Google Chrome',
        //     use: { ...devices['Desktop Chrome'], channel: 'chrome' }
        // }
    ]
    /* Run your local dev server before starting the tests */
    // webServer: {
    //   command: 'npm run start',
    //   url: 'http://127.0.0.1:3000',
    //   reuseExistingServer: !process.env.CI,
    // },
});
