
class SendMoneyPage {
    selectorsList() {
        return {
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
        this.getUserBalance().then((balance) => {
            if (balance < amount) {
                throw new Error(`Erro: Saldo insuficiente! Seu saldo é $${balance}, mas tentou enviar $${amount}.`);
            }

            cy.get(this.selectorsList().inputAmount).clear().type(amount);
            cy.get(this.selectorsList().inputDescribreAmount).type(description);
            cy.get(this.selectorsList().buttonPayTransaction).click();
            cy.get(this.selectorsList().messageTransaction).contains(`Paid $${amount}.00 for ${description}`);
            
        });
    }
}

export default SendMoneyPage;
