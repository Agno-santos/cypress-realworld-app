import Data from '../../../data/database.json'
const dados = Data

describe('sign up test in the Real World App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  
  it('show first name is required', () => {
    cy.get('[data-test="signup"]').click()
    cy.get('#firstName')//missing first name
    cy.get('#lastName').type('de resgistro')
    cy.get('#username').type('agno')
    cy.get('#password').type('s3cret')
    cy.get('#confirmPassword').type('s3cret')
  })
  it('show last name is required', () => {
    cy.get('[data-test="signup"]').click()
    cy.get('#firstName').type('test')
    cy.get('#lastName')//missing last name
    cy.get('#username').type('agno')
    cy.get('#password').type('s3cret')
    cy.get('#confirmPassword').type('s3cret')
  })
  it('show username is required', () => {
    cy.get('[data-test="signup"]').click()
    cy.get('#firstName').type('test')
    cy.get('#lastName').type('of sign in')
    cy.get('#username')//user name missing
    cy.get('#password').type('s3cret')
    cy.get('#confirmPassword').type('s3cret')
  })
  it('show password is required', () => {
    cy.get('[data-test="signup"]').click()
    cy.get('#firstName').type('test')
    cy.get('#lastName').type('of sign in')
    cy.get('#username').type('agno')
    cy.get('#password').click()//password missing
    cy.get('#confirmPassword').type('s3cret')
  })
  it('show confirm password is required', () => {
    cy.get('[data-test="signup"]').click()
    cy.get('#firstName').type('test')
    cy.get('#lastName').type('of sign in')
    cy.get('#username').type('agno')
    cy.get('#password').type('s3cret')
    cy.get('#confirmPassword').click()// confirm password missing
    cy.get('.App-root').click()
  })
  it('Sign up with sucess', () => {
    cy.get('[data-test="signup"]').click()
    cy.get('#firstName').type('teste')
    cy.get('#lastName').type('de resgistro')
    cy.get('#username').type('agno')
    cy.get('#password').type('s3cret')
    cy.get('#confirmPassword').type('s3cret')
    cy.get('[data-test="signup-submit"]').click()
    cy.location('pathname').should('equal','/signin')
  })
})