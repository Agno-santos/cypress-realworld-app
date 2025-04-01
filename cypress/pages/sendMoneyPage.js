
class SendMoneyPage {
    selectorsList() {
        return {
            usernameField: '#username',
            passwordField: '#password',
            loginButton: '[data-test="signin-submit"]',
            wrongCredentialAlert:'.MuiAlert-message',
            buttonTransactionNew: '[data-test="nav-top-new-transaction"]',
            listTransactionFriends: '.UserListSearchForm-form',
            itemListTransactionFriends: '[data-test="user-list-item-uBmeaz5pX"]',
            inputAmount: '#amount',
            inputDescribreAmount: '[placeholder="Add a note"]',
            buttonPayTransaction: '[data-test="transaction-create-submit-payment"]',
            buttonRequestTransaction: '[data-test="transaction-create-submit-request"]',
            messageTransaction: ".TransactionCreateStepThree-paper",
            userBalance: '[data-test="sidenav-user-balance"]' 
        };
    }

    accessLoginPage() {
        cy.visit('http://localhost:3000/');
        
    }
    loginWithUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
        cy.location('pathname').should('equal', '/signin')
    }

    clickNewSendButton() {
        cy.get(this.selectorsList().buttonTransactionNew).click();
    }

    selectContactUser() {
        cy.get(this.selectorsList().listTransactionFriends).type('ted');
        cy.get(this.selectorsList().itemListTransactionFriends).click({ force: true });
    }

    getUserBalance() {
        return cy.get(this.selectorsList().userBalance).invoke('text').then((text) => {
            return parseFloat(text.replace(/[^0-9.]/g, '')); // Converte saldo para número
        });
    }

    sendMoney(amount, description) {
        cy.get(this.selectorsList().userBalance).then($balance => {
            const saldoAtual = parseFloat($balance.text().replace('$', ''));
            if (saldoAtual < amount) {
                cy.log('Saldo insuficiente, abortando teste.');
                return;
            }
        });
    }
}

export default SendMoneyPage;
