module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/**/*.js', 'src/**/**/*.jsx', 'pages/**/*.jsx'],
  coverageReporters: ['lcov', 'text'],
  setupFilesAfterEnv: [
    '<rootDir>/src/setupTests.js'
  ]
};
