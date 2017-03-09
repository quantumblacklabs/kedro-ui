describe('Icon component', () => {

  beforeEach(() => {
    cy.visit('/#!/Icon');
  });

  it('assert that we have more than 2 demos rendering root nodes correctly', () => {
    cy
      .wait(5000)
      .get('.cbn-icon')
      .should('to.have.length.above', 2);
  });

});
