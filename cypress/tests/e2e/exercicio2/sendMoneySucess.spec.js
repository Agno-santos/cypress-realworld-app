import Data from '../../../../data/database.json'
import LoginPage from '../../../pages/loginPage.js'
import SendMoneyPage from '../../../pages/sendMoneyPage.js'
import userData from '../../../fixtures/userData.json'

const dados = Data
const loginPage = new LoginPage()
const sendMoney = new SendMoneyPage()


describe('Send test money', () => {
    it('without  sufficient balance', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(dados.users[1].username, 's3cret')
    sendMoney.clickNewSendButton()
    sendMoney.selectContactUser()
    sendMoney.sendMoneyToFriendWithoutBalance()
  })
  it('with sufficient balance', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(dados.users[1].username, 's3cret')
    sendMoney.clickNewSendButton()
    sendMoney.selectContactUser()
    sendMoney.sendMoneyToFriend()
  })

})