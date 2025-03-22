import Data from '../../../data/database.json'
const dados = Data

describe('sign in', () => {
  it.skip('Do the Sign in with sucess', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-test="signup"]').click()
    cy.get('#firstName').type('teste')
    cy.get('#lastName').type('de resgistro')
    cy.get('#username').type('agno')
    cy.get('#password').type(dados.users[0].password)
    cy.get('#confirmPassword').type(dados.users[0].password)
    cy.get('[data-test="signup-submit"]').click()
  })
      it('show first name is required', () => {
      cy.visit('http://localhost:3000/')
      cy.get('[data-test="signup"]').click()
      cy.get('#firstName')//missing first name
      cy.get('#lastName').type('de resgistro')
      cy.get('#username').type('agno')
      cy.get('#password').type(dados.users[0].password)
      cy.get('#confirmPassword').type(dados.users[0].password)
      cy.get('[data-test="signup-submit"]').click()
    })
    it('show last name is required', () => {
      cy.visit('http://localhost:3000/')
      cy.get('[data-test="signup"]').click()
      cy.get('#firstName').type('test')
      cy.get('#lastName')//missing last name
      cy.get('#username').type('agno')
      cy.get('#password').type(dados.users[0].password)
      cy.get('#confirmPassword').type(dados.users[0].password)
      cy.get('[data-test="signup-submit"]').click()
    })
    it('show username is required', () => {
      cy.visit('http://localhost:3000/')
      cy.get('[data-test="signup"]').click()
      cy.get('#firstName').type('test')
      cy.get('#lastName').type('of sign in')
      cy.get('#username')//user name missing
      cy.get('#password').type(dados.users[0].password)
      cy.get('#confirmPassword').type(dados.users[0].password)
      cy.get('[data-test="signup-submit"]').click()
    })
    it.only('show password is required', () => {
      cy.visit('http://localhost:3000/')
      cy.get('[data-test="signup"]').click()
      cy.get('#firstName').type('test')
      cy.get('#lastName').type('of sign in')
      cy.get('#username').type('agno')
      cy.get('#password').click()//password missing
      cy.get('#confirmPassword').type(dados.users[0].password)
      cy.get('[data-test="signup-submit"]').click()
    })
    it('show confirm password is required', () => {
      cy.visit('http://localhost:3000/')
      cy.get('[data-test="signup"]').click()
      cy.get('#firstName').type('test')
      cy.get('#lastName').type('of sign in')
      cy.get('#username').type('agno')
      cy.get('#password').type(dados.users[0].password)
      cy.get('#confirmPassword').click()// confirm password missing
      cy.get('.App-root').click()
      cy.get('[data-test="signup-submit"]').click()
    })
})