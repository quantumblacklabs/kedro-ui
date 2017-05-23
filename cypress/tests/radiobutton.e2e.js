describe('Radio Button component', () => {

  beforeEach(() => {
    cy.visit('/#!/RadioButton');
  });

  it('assert that we have more than 2 demos rendering root nodes correctly', () => {
    cy
      .get('.cbn-switch-radio')
      .should('to.have.length.above', 2);
  });

  it('assert that each radio button should have a corresponding input field', () => {
    cy
      .get('.cbn-switch-radio:visible input[type="radio"]')
      .each(($el, index, $list) => {
        cy.wrap($el)
          .should('to.have.length', 1);
    });
  });

  it('assert that RadioButton is selected correctly and others deselect correctly', () => {
    cy.get('.cbn-demo-form:visible')
      .each(($el, index, $list) => {
        cy.wrap($el)
          .find('.cbn-switch-radio:visible')
          .each(($el, index, $list) => {
            cy.wrap($el)
              .find('label')
              .click();
            });

        cy.wrap($el)
          .find('.cbn-switch-radio:visible input:checked')
          .should('to.have.length', 1);
      });
  });
});
