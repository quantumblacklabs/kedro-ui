describe('SearchBar component', () => {

  beforeEach(() => {
    cy.visit('/#!/SearchBar');
  });

  it('assert that it clears the text correctly', () => {
    cy
      .get('.cbn-searchbar:visible')
      .each(($el, index) => {
        cy.wrap($el)
          .find('input')
          .type('Hello World');

        cy.wrap($el)
          .find('.cbn-icon--cut')
          .click();

        cy.wrap($el)
          .find('input')
          .should('contain', '');
      });
  });
});
