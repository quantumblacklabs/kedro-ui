describe('Event Indicator component', () => {

  beforeEach(() => {
    cy.visit('/#!/EventIndicator');
  });

  it('assert that we have more than 2 demos rendering root nodes correctly', () => {
    cy
      .get('.cbn-sg-playground__event')
      .should('to.have.length.above', 2);
  });

  it('assert that each indicator has rendered a visible SVG', () => {
    cy
      .get('.cbn-sg-playground__event svg')
      .each(($el, index, $list) => {
        cy.wrap($el)
          .should('be.visible')
      });
  });

  it('assert that each indicator has rendered a visible text', () => {
    cy
      .get('.cbn-sg-playground__event svg text')
      .each(($el, index, $list) => {
        cy.wrap($el)
          .should('be.visible')
      });
  });

  it('assert that clickable indicator is updating its counter correctly', () => {
    cy
      .get('.example-indicator:visible')
      .should(($el, index, $list) => {
        // fistly click on the element, so that the indicator appears
        cy.wrap($el)
          .click();

        // the inicator should show "1" as a value as it has been clicked only once
        cy.get('.cbn-sg-playground__event-count')
          .last()
          .contains('text', 1);

        cy.wrap($el)
          .click();

        // click again and verify that it has gone up by one
        cy.get('.cbn-sg-playground__event-count')
          .last()
          .contains('text', 2);
      });
  });

});
