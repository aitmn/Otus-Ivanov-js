module.exports = {
    testTimeout: 30000,
    verbose: true,
    testMatch: [ "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" ],
    transform: {"\\.[jt]sx?$": "babel-jest",},
    setupFilesAfterEnv: ['jest-allure/dist/setup'],
    testRunner: 'jest-jasmine2',
    reporters: ['default', 'jest-allure']
}
