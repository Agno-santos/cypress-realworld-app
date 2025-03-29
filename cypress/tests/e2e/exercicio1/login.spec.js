import Data from '../../../../data/database.json'
import userData from '../../../fixtures/userData.json'
import LoginPage from '../../../pages/loginPage.js'

const dados = Data
const loginPage = new LoginPage()



describe('Login test in the Real World App', () => {
  beforeEach(() => {
    loginPage.accessLoginPage()
  })
  it('it must do login with a valid user', () => {
     loginPage.loginWithUser(dados.users[3].username, 's3cret')
    // loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
  })
  it('it must to show error message with a invalid user', () => {
    loginPage.failWithInvalidUser('invalid user', 's3cret')
    // loginPage.failWithInvalidUser(userData.userFail.username, userData.userSuccess.password)
  })

  it('it must to show error message with a invalid password', () => {
    loginPage.failWithInvalidPassword(dados.users[3].username, 'invalid password')
    // loginPage.failWithInvalidPassword(userData.userSuccess.username, userData.userFail.password)
  })
})
