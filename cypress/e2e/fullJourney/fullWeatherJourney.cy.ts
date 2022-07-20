// With gelocation "denied" or "prompt"

describe("do a sample weather journey", () => {
  it("user can interact", () => {
    // visit page
    cy.visit("/");
    // enter city
    cy.findByRole("textbox", {
      name: /search city/i,
    }).type("Oslo");
    // get weather
    cy.findByRole("button", { name: /weather for oslo norway/i }).click();
    // enter city
    cy.findByRole("textbox", {
      name: /search city/i,
    }).type("San Fran");
    // get weather
    cy.findByRole("button", { name: /weather for san francisco ca, usa/i }).click();
    // check settings
    cy.get("[data-test=settings-button]").click();
    // open history
    cy.findByRole("button", { name: /toggle history/i }).click();
  });
});
