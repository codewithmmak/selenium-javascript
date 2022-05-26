// filename: lib/config.js
module.exports = {
    baseUrl: process.env.BASE_URL || 'http://the-internet.herokuapp.com',
    browser: process.env.BROWSER || 'firefox',
    // host: process.env.HOST || 'localhost',
    // host: process.env.HOST || 'saucelabs',
    host: process.env.HOST || 'sauceW3C',
    sauce: {
        "browserName": process.env.BROWSER_NAME || 'chrome',
        "browserVersion": process.env.BROWSER_VERSION || '101',
        "platformName": process.env.PLATFORM_NAME || 'Windows 10',
        "username": process.env.SAUCE_USERNAME,
        "accessKey": process.env.SAUCE_ACCESS_KEY,
    },
    sauceW3C: {
        "browserName": process.env.BROWSER_NAME || 'chrome',
        "browserVersion": process.env.BROWSER_VERSION || '101',
        "platformName": process.env.PLATFORM_NAME || 'Windows 10',
        "sauce:options": {
            "username": process.env.SAUCE_USERNAME,
            "accessKey": process.env.SAUCE_ACCESS_KEY,
            "tunnelIdentifier": process.env.SAUCE_TUNNEL,
        }
    },
}