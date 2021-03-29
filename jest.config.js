module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: [
    '<rootDir>/node_modules',
    'node_modules',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/cypress/',
    '<rootDir>/dist/',
  ],
  moduleNameMapper: {
    '^src(.*)$': '<rootDir>/src/$1',
  },
};
