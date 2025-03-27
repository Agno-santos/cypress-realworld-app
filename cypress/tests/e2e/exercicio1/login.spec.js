import Data from '../../../../data/database.json'
import LoginPage from '../../../pages/loginPage.js'

const dados = Data
const loginPage = new LoginPage()

describe('Login test in the Real World App', () => {
  beforeEach(() => {
    loginPage.accessLoginPage()
  })
  it('it must do login with a valid user', () => {
    loginPage.loginWithUser(dados.users[0].username,'s3cret')
  })
  it('it must to show error message with a invalid user', () => {  
    loginPage.failWithInvalidUser('invalid user','s3cret')
  })

  it('it must to show error message with a invalid password', () => {
    loginPage.failWithInvalidPassword(dados.users[0].username,'invalid password')
  })
})
