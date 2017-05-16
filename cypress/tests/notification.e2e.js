describe('Icon component', () => {
  beforeEach(() => {
    cy.visit('/#!/Notification');
  });

  it('assert that we have more than 2 demos rendering root nodes correctly', () => {
    cy
      .get('.cbn-notification')
      .should('to.have.length.above', 2);
  });

  it('should display and remove persistent notifications', () => {
    // for persistent notifications (ones that need dismissal from a user) this
    // simulates a few click on a notification spawner, then closes them
    // testing they are added and removed
    cy
      .get('.cbn-button:visible')
      .each(($el, index, $list) => {
        if (index === 0) {
          cy.wrap($el)
            .click();

          cy.wrap($el)
            .click();

          cy.get('.cbn-notification-list:visible .cbn-notification')
            .should('to.have.length', 2);
        }
      });

    cy.get('.cbn-notification-list:visible .cbn-notification .cbn-icon--close')
      .each(($el, index, $list) => {
        cy.wrap($el)
          .click();
      });

    cy.get('.cbn-notification-list:visible .cbn-notification')
      .should('to.have.length', 0);
  });

  it('should auto remove notifications with a removeAfter', () => {
    // similar to the last test, except these notifications are automatically
    // removed from the screen
    cy
      .get('.cbn-button:visible')
      .each(($el, index, $list) => {
        if (index === 1) {
          cy.wrap($el)
            .click();

          cy.wrap($el)
            .click();

          cy.get('.cbn-notification-list:visible .cbn-notification')
            .should('to.have.length', 2);
        }
      });

    setTimeout(() => {
      cy.get('.cbn-notification-list:visible .cbn-notification')
        .should('to.have.length', 0);
    }, 4000);
  });
});
