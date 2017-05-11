describe('Checkbox Button component', () => {

  beforeEach(() => {
    cy.visit('/#!/Checkbox');
  });

  it('assert that we have more than 2 demos rendering root nodes correctly', () => {
    cy
      .get('.cbn-switch-checkbox')
      .should('to.have.length.above', 2);
  });

  it('assert that Checkbox is selected correctly, with multiple available to select', () => {
    cy.get('.cbn-switch-checkbox:visible')
      .each(($el, index, $list) => {
        cy.wrap($el)
          .find('label')
          .click();
    });

    cy
      .get('.cbn-switch-checkbox:visible input:checked')
      .should('to.have.length', 3);

    cy.get('.cbn-switch-checkbox:visible')
      .each(($el, index, $list) => {
        cy.wrap($el)
          .find('label')
          .click();
    });

    cy
      .get('.cbn-switch-checkbox:visible input:checked')
      .should('to.have.length', 0);
  });

});
