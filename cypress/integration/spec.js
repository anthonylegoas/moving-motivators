describe("Sapper template app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("navigates to /", () => {
    cy.get("nav a").contains("Jouer").click();
    cy.url().should("include", "/");
  });

  it("navigates to /blog", () => {
    cy.get("nav a").contains("Comment jouer ?").click();
    cy.url().should("include", "/how-to-play");
  });
});
