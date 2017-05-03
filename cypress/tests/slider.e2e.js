describe('Input component', () => {

  beforeEach(() => {
    cy.visit('/#!/Slider');
  });

  it('assert that we have more than 2 demos rendering correctly', () => {
    cy.get('.cbn-sg-playground__preview-section .cbn-slider:visible')
      .should('to.have.length.above', 2);
  });

  // SINGLE SLIDER

  it('assert that single slider number inputs allow number to be typed in', () => {
    cy.get('section.cbn-sg-playground__preview-section:visible .cbn-slider--single')
      .find('.cbn-slider__number-input')
      .find('input[value!=""]')
      .each($el => {
        const newValue = 100;

        cy.wrap($el)
          .clear()
          .type(newValue)
          .should('have.attr', 'value', `${newValue}`);
      });
  });

  it('assert that single slider updates the slider after number typed in', () => {
    cy.get('section.cbn-sg-playground__preview-section:visible .cbn-slider--single')
      .each($el => {
        const newValue = 100;

        // set new value into number input
        cy.wrap($el)
          .find('.cbn-slider__number-input')
          .find('input[value!=""]')
          .clear()
          .type(newValue);

        // click outside the input, so that the slider updates
        cy.wrap($el)
          .click();

        // check if the slider has the correct value
        cy.wrap($el)
          .find('input[value!=""]')
          .should('have.attr', 'value', `${newValue}`);
      });
  });

  it('assert that single stepped slider updates the slider after number typed in', () => {
    cy.get('section.cbn-sg-playground__preview-section:visible .cbn-slider--single.cbn-slider--stepped')
      .each($el => {
        const newValue = 66;
        const steppedValue = 60;

        // set new value into number input - this value is not a correct value for the stepped slider on purpose
        cy.wrap($el)
          .find('.cbn-slider__number-input')
          .find('input[value!=""]')
          .clear()
          .type(newValue);

        // click outside the input, so that the slider updates
        cy.wrap($el)
          .click();

        // check if the slider has the correct stepped value
        cy.wrap($el)
          .find('input[value!=""]')
          .should('have.attr', 'value', `${steppedValue}`);

        // check if the input number has the correctly updated stepped value
        cy.wrap($el)
          .find('.cbn-slider__number-input')
          .find('input[value!=""]')
          .should('have.attr', 'value', `${steppedValue}`);
      });
  });

  // MULTIPLE SLIDER

  it('assert that multiple slider MIN number inputs allow number to be typed in', () => {
    cy.get('section.cbn-sg-playground__preview-section:visible .cbn-slider--multiple')
      .find('.cbn-slider__number-input--min ')
      .find('input[value!=""]')
      .each($el => {
        const newValue = 10;

        cy.wrap($el)
          .clear()
          .type(newValue)
          .should('have.attr', 'value', `${newValue}`);
      });
  });

  it('assert that multiple slider MAX number inputs allow number to be typed in', () => {
    cy.get('section.cbn-sg-playground__preview-section:visible .cbn-slider--multiple')
      .find('.cbn-slider__number-input--max ')
      .find('input[value!=""]')
      .each($el => {
        const newValue = 50;

        cy.wrap($el)
          .clear()
          .type(newValue)
          .should('have.attr', 'value', `${newValue}`);
      });
  });

  it('assert that multiple slider updates the slider after MIN number typed in', () => {
    cy.get('section.cbn-sg-playground__preview-section:visible .cbn-slider--multiple')
      .each($el => {
        const newValue = 10;

        // set new value into number input
        cy.wrap($el)
          .find('.cbn-slider__number-input--min ')
          .find('input[value!=""]')
          .clear()
          .type(newValue);

        // click outside the input, so that the slider updates
        cy.wrap($el)
          .click();

        // check if the slider has the correct value
        cy.wrap($el)
          .find('.cbn-slider__input--min')
          .should('have.attr', 'value', `${newValue}`);
      });
  });

  it('assert that multiple slider updates the slider after MAX number typed in', () => {
    cy.get('section.cbn-sg-playground__preview-section:visible .cbn-slider--multiple')
      .each($el => {
        const newValue = 50;

        // set new value into number input
        cy.wrap($el)
          .find('.cbn-slider__number-input--max ')
          .find('input[value!=""]')
          .clear()
          .type(newValue);

        // click outside the input, so that the slider updates
        cy.wrap($el)
          .click();

        // check if the slider has the correct value
        cy.wrap($el)
          .find('.cbn-slider__input--max')
          .should('have.attr', 'value', `${newValue}`);
      });
  });

  it('assert that single stepped multiple updates the slider after MIN number typed in', () => {
    cy.get('section.cbn-sg-playground__preview-section:visible .cbn-slider--multiple.cbn-slider--stepped')
      .each($el => {
        const newValue = 22;
        const steppedValue = 20;

        // set new value into number input - this value is not a correct value for the stepped slider on purpose
        cy.wrap($el)
          .find('.cbn-slider__number-input--min')
          .find('input[value!=""]')
          .clear()
          .type(newValue);

        // click outside the input, so that the slider updates
        cy.wrap($el)
          .click();

        // check if the slider has the correct stepped value
        cy.wrap($el)
          .find('.cbn-slider__input--min')
          .should('have.attr', 'value', `${steppedValue}`);

        // check if the input number has the correctly updated stepped value
        cy.wrap($el)
          .find('.cbn-slider__number-input--min')
          .find('input[value!=""]')
          .should('have.attr', 'value', `${steppedValue}`);
      });
  });

  it('assert that single stepped multiple updates the slider after MAX number typed in', () => {
    cy.get('section.cbn-sg-playground__preview-section:visible .cbn-slider--multiple.cbn-slider--stepped')
      .each($el => {
        const newValue = 44;
        const steppedValue = 40;

        // set new value into number input - this value is not a correct value for the stepped slider on purpose
        cy.wrap($el)
          .find('.cbn-slider__number-input--max')
          .find('input[value!=""]')
          .clear()
          .type(newValue);

        // click outside the input, so that the slider updates
        cy.wrap($el)
          .click();

        // check if the slider has the correct stepped value
        cy.wrap($el)
          .find('.cbn-slider__input--max')
          .should('have.attr', 'value', `${steppedValue}`);

        // check if the input number has the correctly updated stepped value
        cy.wrap($el)
          .find('.cbn-slider__number-input--max')
          .find('input[value!=""]')
          .should('have.attr', 'value', `${steppedValue}`);
      });
  });

});
