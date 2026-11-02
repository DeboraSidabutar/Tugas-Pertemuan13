import path from 'node:path'

export const config = {
    runner: 'local',
    port: 4723,
    specs: ['./test/specs/**/*.js'],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'vivo',
        'appium:udid': '10DD5Z05PP0003C',
        'appium:platformVersion': '15',
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.resolve('./app/sauce-labs.2.7.1.apk'),
        'appium:appWaitActivity': '*',
        'appium:autoGrantPermissions': true,
        'appium:noReset': false,
        'appium:fullReset': false,
        'appium:newCommandTimeout': 30000
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [],
    framework: 'mocha',
    reporters: ['spec'],
    logLevel: 'error',
    mochaOpts: {
        ui: 'bdd',
        timeout: 120000
    }
}