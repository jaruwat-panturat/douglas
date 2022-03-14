export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  transform: {
    "^.+\\.(j|t)(s|sx)$": "ts-jest"
  }
};
