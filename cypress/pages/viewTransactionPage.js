class viewTransactionPage {
    selectorsList() {
        const selectors = {
            usernameField: '#username',
            passwordField: '#password',
            loginButton: '[data-test="signin-submit"]',
            buttonSignUpPage: '[data-test="signup"]',
            wrongCredentialAlert: '.MuiAlert-message',
            gridTransactions: '.ReactVirtualized__Grid',
            buttonNavtopPublic:'[data-test="nav-public-tab"]',
            buttonNavtopMine:'[data-test="nav-personal-tab"]',
            alertNotransaction:' [data-test="empty-list-header"]'


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
        cy.get(this.selectorsList().buttonNavtopPublic).click()
        cy.get(this.selectorsList().gridTransactions).then($grid => {
            if ($grid.children().length === 0) {
                throw new Error('Erro: não existem transações ainda!');
            }
        });
        
    }
   
    viewTransactionFail(username,password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
        cy.location('pathname').should('equal', '/signin')
        cy.get(this.selectorsList().buttonNavtopMine).click()
       
        cy.get(this.selectorsList().alertNotransaction).then($alert => {
            if ($alert.length > 0 && $alert.text().includes('No Transactions')) {
                throw new Error('Erro: não existem transações ainda!');
            }
        });
        
        
        
    }

    

}
export default viewTransactionPage