describe('Radio Button component', () => {

  beforeEach(() => {
    cy.visit('/#!/RadioButton');
  });

  it('assert that we have more than 2 demos rendering root nodes correctly', () => {
    cy
      .get('.cbn-switch-radio')
      .should('to.have.length.above', 2);
  });

  it('assert that RadioButton is selected correctly and others deselect correctly', () => {
    cy.get('.cbn-switch-radio:visible')
      .each(($el, index, $list) => {
        cy.wrap($el)
          .find('label')
          .click();
    });

    cy
      .get('.cbn-switch-radio:visible input:checked')
      .should('to.have.length', 1);
  });
});
