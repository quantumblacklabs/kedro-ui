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

        cy.wrap($el)
          .find('.cbn-slider__number-input')
          .find('input[value!=""]')
          .clear()
          .type(newValue);

        cy.wrap($el)
          .find('input[value!=""]')
          .should('have.attr', 'value', `${newValue}`);
      });
  });

  // MULTIPLE SLIDER

  it('assert that multiple slider min number inputs allow number to be typed in', () => {
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

  it('assert that multiple slider max number inputs allow number to be typed in', () => {
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

  it('assert that multiple slider updates the slider after min number typed in', () => {
    cy.get('section.cbn-sg-playground__preview-section:visible .cbn-slider--multiple')
      .each($el => {
        const newValue = 10;

        cy.wrap($el)
          .find('.cbn-slider__number-input--min ')
          .find('input[value!=""]')
          .clear()
          .type(newValue);

        cy.wrap($el)
          .find('.cbn-slider__input--min')
          .should('have.attr', 'value', `${newValue}`);
      });
  });

  it('assert that multiple slider updates the slider after max number typed in', () => {
    cy.get('section.cbn-sg-playground__preview-section:visible .cbn-slider--multiple')
      .each($el => {
        const newValue = 50;

        cy.wrap($el)
          .find('.cbn-slider__number-input--max ')
          .find('input[value!=""]')
          .clear()
          .type(newValue);

        cy.wrap($el)
          .find('.cbn-slider__input--max')
          .should('have.attr', 'value', `${newValue}`);
      });
  });

});
