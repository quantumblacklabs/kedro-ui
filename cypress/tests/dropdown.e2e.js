describe('Dropdown component', () => {

  beforeEach(() => {
    cy.visit('/#!/Dropdown');
  });

  it('assert that we have more than 2 demos rendering root nodes correctly', () => {
    cy.get('.cbn-dropdown')
      .should('to.have.length.above', 2);
  });

  it('assert that Dropdown opens and closes correctly', () => {
    cy.get('.cbn-dropdown')
      .each(($el, index, $list) => {

        const originalLabel = $el.find('.cbn-dropdown__label>span').html();
        const optionLabel = $el.find('.cbn-menu-option:first span').html();

        cy.log('originalLabel', originalLabel);
        cy.log('optionLabel', optionLabel);

        cy.wrap($el)
          .children()
          .should('to.have.length.above', 1);

        cy.wrap($el)
          .find('.cbn-dropdown__options')
          .should('not.be.visible');

        cy.wrap($el)
          .find('.cbn-dropdown__label')
          .click();

        cy.wrap($el)
          .should('have.class', 'cbn-dropdown--open');

        cy.wrap($el)
          .find('.cbn-dropdown__options')
          .should('be.visible');

        cy.wrap($el)
          .find('.cbn-menu-option:first span')
          .click();

        cy.wrap($el)
          .should('not.have.class', 'cbn-dropdown--open');

          cy.wrap($el)
            .find('.cbn-dropdown__options')
            .should('not.be.visible');

        if (originalLabel !== optionLabel) {
          // assert label has changed
          cy.wrap($el)
            .find('.cbn-dropdown__label>span')
            .should('not.contain', originalLabel);
        }


      });
  });

});
