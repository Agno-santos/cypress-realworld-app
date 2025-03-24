describe('Send money sucess', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('#username').type('usertest')
    cy.get('#password').type('test123')
    cy.get('[data-test="signin-submit"]').click()
    cy.location('pathname').should('equal','/signin')
  })
  it('with sufficient balance', () => {
    cy.get('[data-test="nav-top-new-transaction"]').click()
    cy.get('[data-test="user-list-search-input"]').type('ted')
    cy.get('[data-test="user-list-item-uBmeaz5pX"]').click({force:true})
    cy.get('#amount').type('100') 
    cy.get('#transaction-create-description-input').type('SendedMoneyForTed')
    cy.get('[data-test="transaction-create-submit-payment"]').click()
    cy.get("[data-test='main']").should('equal','Paid $100 for SendedMoneyForted')
 
  })
})