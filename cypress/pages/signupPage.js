class SignUpPage {
    selectorsList() {
        const selectors = {
            userNameField: '#username',
            passwordField: '#password',
            ButtonSignUpSubmmit: '[data-test="signup-submit"]',
            wrongCredentialAlert: '.MuiAlert-message',
            buttonSignUpPage: '[data-test="signup"]',
            inputFirstNameField: '#firstName',
            inputLastNameField: '#lastName',
            confirmPasswordField: '#confirmPassword'

        }
        return selectors
    }
    accessLoginPage() {
        cy.visit('http://localhost:3000/')
        cy.get(this.selectorsList().buttonSignUpPage).click()

    }
    creatUser(firstname, lastname, username, password, confirmpassword) {
        cy.get(this.selectorsList().inputFirstNameField).type(firstname)
        cy.get(this.selectorsList().inputLastNameField).type(lastname)
        cy.get(this.selectorsList().userNameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmPasswordField).type(confirmpassword)
        cy.get(this.selectorsList().ButtonSignUpSubmmit).click({ force: true })
        cy.location('pathname').should('equal', '/signup')
    }
    requiredFirstName(firstname, lastname, username, password, confirmpassword) {
        cy.get(this.selectorsList().inputFirstNameField).click()
        cy.get(this.selectorsList().inputLastNameField).type(lastname)
        cy.get(this.selectorsList().userNameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmPasswordField).type(confirmpassword)
        
        cy.get('#firstName-helper-text')
    }
    requiredLastName(firstname, lastname, username, password, confirmpassword) {
        cy.get(this.selectorsList().inputFirstNameField).type(firstname)
        cy.get(this.selectorsList().inputLastNameField).click()
        cy.get(this.selectorsList().userNameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmPasswordField).type(confirmpassword)
       
        cy.get('#lastName-helper-text')
    }
    requiredUserName(firstname, lastname, username, password, confirmpassword) {
        cy.get(this.selectorsList().inputFirstNameField).type(firstname)
        cy.get(this.selectorsList().inputLastNameField).type(lastname)
        cy.get(this.selectorsList().userNameField).click()
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmPasswordField).type(confirmpassword)
        cy.get('#username-helper-text')
        
    }
    requiredPassword(firstname, lastname, username, password, confirmpassword) {
        cy.get(this.selectorsList().inputFirstNameField).type(firstname)
        cy.get(this.selectorsList().inputLastNameField).type(lastname)
        cy.get(this.selectorsList().userNameField).type(username)
        cy.get(this.selectorsList().passwordField).click()
        cy.get(this.selectorsList().confirmPasswordField).type(confirmpassword)
        cy.get('#password-helper-text')
    }
    requiredConfirmPassword(firstname, lastname, username, password, confirmpassword) {
        cy.get(this.selectorsList().inputFirstNameField).type(firstname)
        cy.get(this.selectorsList().inputLastNameField).type(lastname)
        cy.get(this.selectorsList().userNameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmPasswordField).click()
        cy.get('.App-root').click()
        cy.get('#confirmPassword-helper-text')
        
    }
    

}
export default SignUpPage