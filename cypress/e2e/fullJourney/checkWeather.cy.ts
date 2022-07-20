// With gelocation "denied" or "prompt"

describe("check local weather", () => {
  it("user can see weather", () => {
    // visit page
    cy.visit("/");
    // allow geoLocation
    cy.findByRole("button", { name: /find weather/i }).click();
  });
});
