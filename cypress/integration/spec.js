describe("Navigation", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("navigates to /", () => {
        cy.get("nav a").contains("THE GAME").click();
        cy.url().should("include", "/");
    });

    it("navigates to /about", () => {
        cy.get("nav a").contains("ABOUT").click();
        cy.url().should("include", "/about");
    });
});
