describe('Send money sucess', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    // ------------registrar-se----------
    cy.get('[data-test="signup"]').click()
    cy.get('#firstName').type('teste')
    cy.get('#lastName').type('de resgistro')
    cy.get('#username').type('usertest')
    cy.get('#password').type('test123')
    cy.get('#confirmPassword').type('test123')
    cy.get('[data-test="signup-submit"]').click()
    // ----------fazer login-------------------
    cy.get('#username').type('usertest')
    cy.get('#password').type('test123')
    cy.get('[data-test="signin-submit"]').click()
    cy.location('pathname').should('equal','/signin')
  })
  it('with sufficient balance', () => {
    cy.get('[data-test="user-onboarding-dialog-title"]').contains("Get Started with Real World App")
    cy.get('[data-test="user-onboarding-next"]').click()
    cy.get('[data-test="user-onboarding-dialog-title"]').contains("Create Bank Account")
    cy.get('#bankaccount-bankName-input').type('testbank')
    cy.get("[name='routingNumber']").type('123456789')
    cy.get("[name='accountNumber']").type('987654321')
    cy.get("[type='submit']").click()
    cy.get('[data-test="user-onboarding-dialog-title"]').contains('Finished')
   
    cy.get('[data-test="user-onboarding-next"]').click()
    cy.get('[data-test="nav-top-new-transaction"]').click()
    cy.get('[data-test="user-list-search-input"]').type('ted')
    cy.get('[data-test="user-list-item-uBmeaz5pX"]').click({force:true})
    cy.get('#amount').type('100') 
    cy.get('#transaction-create-description-input').type('SendedMoneyForTed')
    cy.get('[data-test="transaction-create-submit-payment"]').click()
    cy.get(".TransactionCreateStepThree-paper").contains('Paid $100.00 for SendedMoneyForTed')
    
  })
})