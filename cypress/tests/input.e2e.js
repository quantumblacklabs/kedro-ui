describe('Input component', () => {

  const textForTyping = '***text***';

  beforeEach(() => {
    cy.visit('/#!/Input');
  });

  it('assert that we have more than 2 demos rendering correctly', () => {
    cy.get('.cbn-sg-playground__preview-section .cbn-input:visible')
      .should('to.have.length.above', 2);
  });

  it('assert that non-disabled non-empty inputs allow text to be typed in', () => {
    cy.get('section.cbn-sg-playground__preview-section:visible .cbn-input')
      .not('.cbn-input--disabled')
      .find('input[value!=""]')
      .each($el => {
        const value = $el.attr('value');

        cy.wrap($el)
          .type(textForTyping)
          .should('have.attr', 'value', `${value}${textForTyping}`);
      });
  });

  it('assert that non-disabled empty inputs allow text to be typed in', () => {
    cy.get('section.cbn-sg-playground__preview-section:visible .cbn-input')
      .not('.cbn-input--disabled')
      .find('input[value=""]')
      .each($el => {
        cy.wrap($el)
          .type(textForTyping)
          .should('have.attr', 'value', textForTyping)
      });
  });

  it('assert that disabled inputs do not allow text to be typed in', () => {
    cy.get('section.cbn-sg-playground__preview-section:visible .cbn-input--disabled')
      .find('input[value=""]')
      .each($el => {
        const disabledInputText = 'Text inside disabled input';
        cy.wrap($el)
          .type(disabledInputText, { force: true })
          .should('have.value', disabledInputText);
      });
  });

  it('assert that error and success inputs have visible line', () => {
    cy.get('section.cbn-sg-playground__preview-section:visible')
      .find('.cbn-input--success, .cbn-input--error')
      .find('.cbn-input__line')
      .should('be.visible');
  });
});
