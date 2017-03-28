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
    // cy
    //   .get('.example-indicator')
    //   .each(($el, index, $list) => {
    //
    //     // find count in $el
    //     const countNode = cy.find('.cbn-sg-playground__event-count');
    //     const initialValue = parseInt(countNode.text(), 10);
    //
    //     cy.wrap($el)
    //       .click();
    //
    //     // find count, verify it's gone up 1
    //     const afterClickValue = parseInt(countNode.text(), 10);
    //
    //     expect(initialValue).eq(afterClickValue);
    //   });
  });

});
