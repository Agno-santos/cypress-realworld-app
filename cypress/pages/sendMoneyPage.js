class SendMoneyPage {
    selectorsList() {
        const selectors = {
            buttonTransactionNew: '[data-test="nav-top-new-transaction"]',
            listTransactionFriends: '.UserListSearchForm-form',
            itemListTransactionFriends: '[data-test="user-list-item-uBmeaz5pX"]',
            inputAmount: '#amount',
            inputDescribreAmount: '[placeholder="Add a note"]',
            buttonPayTransaction: '[data-test="transaction-create-submit-payment"]',
            buttonRequestTransaction: '[data-test="transaction-create-submit-request"]',
            messageTransaction: ".TransactionCreateStepThree-paper"


        }
        return selectors
    }
    accessLoginPage() {
        cy.visit('http://localhost:3000/')
    }
    clickNewSendButton() {
        cy.get(this.selectorsList().buttonTransactionNew).click()
    }
    selectContactUser() {
        cy.get(this.selectorsList().listTransactionFriends).type('ted')
        cy.get(this.selectorsList().itemListTransactionFriends).click({ force: true })
    }
   
    sendMoneyToFriend() {
        cy.get(this.selectorsList().inputAmount).type('100')
        cy.get(this.selectorsList().inputDescribreAmount).type('SendMoneyForTed')
        cy.get(this.selectorsList().buttonPayTransaction).click()
        cy.get(this.selectorsList().messageTransaction).contains('Paid $100.00 for SendedMoneyForTed')

    }
    sendMoneyToFriendWithoutBalance() {
        cy.get(this.selectorsList().inputAmount).type('1300')
        cy.get(this.selectorsList().inputDescribreAmount).type('SendMoneyForTedwithoutBalance')
        cy.get(this.selectorsList().buttonPayTransaction).click()
        cy.get(this.selectorsList().messageTransaction).contains('Paid $300.00 for SendedMoneyForTedwithoutBalance')

    }

}
export default SendMoneyPage