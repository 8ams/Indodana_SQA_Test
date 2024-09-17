const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.cermati.com/",
    env: {
      mobilePhone: "081288066835",
      email: "andhhikarputra@gmail.com",
      FirstName: "Andhika",
      LastName: "Putra",
    },
  },
});
