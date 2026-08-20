const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: true,

  e2e: {
    baseUrl: 'https://demoqa.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    blockHosts: [
      "*doubleclick.net",
      "*google-analytics.com",
      "*analytics.google.com",
    ]
  },
});
