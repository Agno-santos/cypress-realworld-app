class LoginPage {
    selectorsList() {
        const selectors = {
            usernameField: '#username',
            passwordField: '#password',
            loginButton: '[data-test="signin-submit"]',
            wrongCredentialAlert:'.MuiAlert-message'

        }
        return selectors
    }
    accessLoginPage() {
        cy.visit('http://localhost:3000/')
    }
    loginWithUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
        cy.location('pathname').should('equal', '/signin')
    }
    failWithInvalidUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().wrongCredentialAlert)
    }
    failWithInvalidPassword(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
        cy.get(this.selectorsList().wrongCredentialAlert)

    }

}
export default LoginPage