import Data from '../../../../data/database.json'
const dados = Data

const selectorsList = {
  usernameField: '#username',
  passwordField:'#password',
  bankAcountName:'#bankaccount-bankName-input',
  // ------------------------------
  inputFirstNameField:'#firstName',
  inputLastNameField:'#lastName',
  confirmPasswordField:'#confirmPassword',
  // ------------------------------
  routingNumber:"[name='routingNumber']",
  accountNumber:"[name='accountNumber']",
  buttonBank:"[type='submit']",
  loginButton:'[data-test="signin-submit"]',
  wrongCredentialAlert:"[role='alert']",
  sectionOnboardingDialogTitle:'[data-test="user-onboarding-dialog-title"]',
  buttonNext:'[data-test="user-onboarding-next"]',
  buttonTransactionNew: '[data-test="nav-top-new-transaction"]',
  listTransactionFriends: '[data-test="user-list-search-input"]',
  itemListTransactionFriends:'[data-test="user-list-item-uBmeaz5pX"]',
  inputAmount:'#amount',
  inputDescribreAmount:'#transaction-create-description-input',
  buttonSubmitTransaction:'[data-test="transaction-create-submit-payment"]',
  messageTransaction:".TransactionCreateStepThree-paper"

}
describe('Send money sucess', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    // ------------registrar-se----------
    cy.get('[data-test="signup"]').click()
    cy.get(selectorsList.inputFirstNameField).type('teste')
    cy.get(selectorsList.inputLastNameField).type('de resgistro')
    cy.get(selectorsList.usernameField).type('usertest')
    cy.get(selectorsList.passwordField).type('test123')
    cy.get(selectorsList.confirmPasswordField).type('test123')
    cy.get('[data-test="signup-submit"]').click()
    // ----------fazer login-------------------
    cy.get(selectorsList.usernameField).type('usertest')
    cy.get(selectorsList.passwordField).type('test123')
    cy.get('[data-test="signin-submit"]').click()
    cy.location('pathname').should('equal','/signin')
  })
  it('with sufficient balance', () => {
    cy.get(selectorsList.sectionOnboardingDialogTitle).contains("Get Started with Real World App")
    cy.get(selectorsList.buttonNext).click()
    cy.get(selectorsList.sectionOnboardingDialogTitle).contains("Create Bank Account")
    cy.get(selectorsList.bankAcountName).type('testbank')
    cy.get(selectorsList.routingNumber).type('123456789')
    cy.get(selectorsList.accountNumber).type('987654321')
    cy.get(selectorsList.buttonBank).click()
    cy.get(selectorsList.sectionOnboardingDialogTitle).contains('Finished')
    cy.get(selectorsList.buttonNext).click()
    cy.get(selectorsList.buttonTransactionNew).click()
    cy.get(selectorsList.listTransactionFriends).type('ted')
    cy.get(selectorsList.itemListTransactionFriends).click({force:true})
    cy.get(selectorsList.inputAmount).type('100') 
    cy.get(selectorsList.inputDescribreAmount).type('SendedMoneyForTed')
    cy.get(selectorsList.buttonSubmitTransaction).click()
    cy.get(selectorsList.messageTransaction).contains('Paid $100.00 for SendedMoneyForTed')
    
  })
})