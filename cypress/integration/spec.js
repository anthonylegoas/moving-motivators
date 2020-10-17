describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("navigates to /", () => {
    cy.get("nav a").contains("LE JEU").click();
    cy.url().should("include", "/");
  });

  it("navigates to /about", () => {
    cy.get("nav a").contains("À PROPOS").click();
    cy.url().should("include", "/about");
  });
});
