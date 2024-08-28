const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    viewportHeight: 1080, //altura em pixel
    viewportWidth: 1920, //largura em pixel
    baseUrl: 'https://www.saucedemo.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
