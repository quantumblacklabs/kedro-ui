//
// **** Kitchen Sink Tests ****
//
// This app was developed to demonstrate
// how to write tests in Cypress utilizing
// all of the available commands
//
// Feel free to modify this spec in your
// own application as a jumping off point

// **** Test Structure ****
//
// Cypress has adopted Mocha's bdd syntax.
// https://on.cypress.io/guides/bundled-tools#section-mocha
//

describe('Insights', function(){

  beforeEach(function(){
    // **** Resetting State Before Each Test ****
    //
    // Visiting our app before each test
    // removes any state build up from
    // previous tests. Visiting acts as if
    // we closed a tab and opened a fresh one
    //
    // By default Cypress also automatically
    // clears the Local Storage and Cookies
    // before each test.
  })

  it('cy.should - assert that <title> is correct', function(){

    // https://on.cypress.io/api/visit
    cy.visit('https://carbon.quantumblack.io/#!/Tree')

    // **** Making Assertions ****
    //
    // Here we've made our first assertion using a 'cy.should()' command.
    // An assertion is comprised of a chainer, subject, and optional value.
    // Chainers are available from Chai, Chai-jQuery, and Chai-Sinon.
    // https://on.cypress.io/guides/making-assertions
    //
    // https://on.cypress.io/api/should
    // https://on.cypress.io/api/and

    // https://on.cypress.io/api/title
    cy.title().should('include', 'Carbon')
    //   ↲               ↲            ↲
    // subject        chainer      value
  })

  context('Tree', function(){
    beforeEach(function(){
      cy.visit('https://carbon.quantumblack.io/#!/Tree')
    })


    it('cy.click() - click on a DOM element', function(){
      // https://on.cypress.io/api/click
      cy.get('.qb-leaf:first').click()
    })

  })
  context('OrbitChart', function(){
    beforeEach(function(){
      cy.visit('https://carbon.quantumblack.io/#!/OrbitChart')
    })

    it('cy.click() - click on a DOM element', function(){
      // https://on.cypress.io/api/click
      cy.get('.qb-satellite:first').click()
    })

  })


})
