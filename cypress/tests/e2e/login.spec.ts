import Data from '../../../data/database.json'
const dados = Data

describe('Login test in the Real World App', () => {
  it.only('it must do login with a valid user', () => {
    cy.visit('http://localhost:3000/')
    cy.get('body').type('Heath93')
    cy.get('#password').type('s3cret')
    cy.get('[data-test="signin-submit"]').click()
    cy.location('pathname').should('equal','//localhost:3001/login')
  })
  // it('it must to show error message with a invalid user', () => {
  //   cy.visit('http://localhost:3000/')
  //   cy.get('body').type('invalid username')
  //   cy.get('#password').type(dados.users[0].password)
  //   cy.get('[data-test="signin-submit"]').click()
  // })
  // it('it must to show error message with a invalid password', () => {
  //   cy.visit('http://localhost:3000/')
  //   cy.get('body').type(dados.users[0].username)
  //   cy.get('#password').type(' invalid password')
  //   cy.get('[data-test="signin-submit"]').click()
  // })
})