module.exports = {
    collectCoverage: true,
    coverageReporters: ["lcov"],
    watchAll: false,
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80
      }
    }
  };