import Data from '../../../../data/database.json'
const dados = Data

describe('Login test in the Real World App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('it must do login with a valid user', () => {
    cy.get('#username').type(dados.users[0].username)
    cy.get('#password').type('s3cret')
    cy.get('[data-test="signin-submit"]').click()
    cy.location('pathname').should('equal','/signin')
 
  })
  it('it must to show error message with a invalid user', () => {  
    cy.get('#username').type('invalid username')
    cy.get('#password').type('s3cret')
    cy.get('[data-test="signin-submit"]').click()
  })

  it('it must to show error message with a invalid password', () => {
    cy.get('#username').type(dados.users[0].username)
    cy.get('#password').type('invalid password')
    cy.get('[data-test="signin-submit"]').click()
  })
})