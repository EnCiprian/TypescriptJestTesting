module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.steps.ts?$": "ts-jest"
  },
  "testMatch": [
    "**/*.steps.ts"
  ],
  moduleNameMapper: {
    "@src/(.*)": "<rootDir>/src/$1"
  },
  restoreMocks: true
};