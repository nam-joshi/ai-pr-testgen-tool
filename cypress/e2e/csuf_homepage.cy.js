describe('CSUF Homepage Smoke Test', () => {
    it('Visits CSUF homepage', () => {
      cy.visit('https://www.fullerton.edu/');
    });

    it("Search bar functionality", () => {
        cy.visit("https://www.fullerton.edu");
        cy.get("input[type='search'], #search, .search").should("exist");
      });
});