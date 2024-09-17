describe("Cermati Registration - Positive Test Case", () => {
  before(() => {
    cy.visit("/gabung");
  });

  it("Registration with Valid Data", () => {
    cy.xpath("//input[@id='mobilePhone']").type(Cypress.env("mobilePhone"));
    cy.xpath("//input[@id='email']").type(Cypress.env("email"));
    cy.xpath("//input[@id='firstName']").type(Cypress.env("FirstName"));
    cy.xpath("//input[@id='lastName']").type(Cypress.env("LastName"));

    cy.get('button[data-button-name="register-new"]').click();

    cy.pause(); // Manually solve the reCAPTCHA

    cy.get('button[data-button-name="register-new"]').click();
    cy.wait(3000);
  });
});
