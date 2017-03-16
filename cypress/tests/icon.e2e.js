describe('Icon component', () => {

  beforeEach(() => {
    cy.visit('/#!/Icon');
  });

  it('assert that we have more than 2 demos rendering root nodes correctly', () => {
    cy
      .get('.cbn-icon')
      .should('to.have.length.above', 2);
  });

  it('assert that each icon has rendered a visible SVG node', () => {
    cy
      .get('.cbn-icon svg')
      .each(($el, index, $list) => {
        cy.wrap($el)
          .should('be.visible')
          .children()
          .should('to.have.length.above', 0);
      });
  });

});
