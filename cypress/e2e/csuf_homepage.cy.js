describe('CSUF Homepage Smoke Test', () => {
    it('Visits CSUF homepage', () => {
      cy.visit('https://www.fullerton.edu/');
    });

    it("Search bar visibe test case", () => {
        cy.visit("https://www.fullerton.edu");
        cy.get("input[type='search'], #search, .search").should("exist");
      });

      it("CSUF holder is visible", () => {
        cy.visit("https://csuf.edu");
        cy.contains("California State University").should("be.visible");
      });
});