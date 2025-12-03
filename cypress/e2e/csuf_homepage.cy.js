describe('CSUF Homepage Smoke Test', () => {
    it('Visit CSUF homepage', () => {
      cy.visit('https://www.fullerton.edu/');
    });

    it("Search bar functionality", () => {
        cy.visit("https://www.fullerton.edu");
        cy.get("input[type='search'], #search, .search").should("exist");
      });

    // small change to trigger bot
    it("dummy check", () => {
        expect(true).to.equal(true);
        });
  
});