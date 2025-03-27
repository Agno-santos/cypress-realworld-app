import Data from '../../../../data/database.json'
import LoginPage from '../../../pages/loginPage.js'
import SignUpPage from '../../../pages/signupPage'


const dados = Data
const loginPage  = new LoginPage()
const signupPage  = new SignUpPage()


describe('sign up test in the Real World App', () => {
  beforeEach(() => {
    signupPage.accessLoginPage()
  })
  it('Sign up with sucess', () => {
    signupPage.creatUser('test','of signup','agno','agno123','agno123')
  })
  it('show first name is required', () => {
    signupPage.requiredFirstName('agnotest','of signup','agno','agno123','agno123')
  })
  it('show last name is required', () => {
    signupPage.requiredLastName('agnotest','of signup','agno','agno123','agno123')
  })
  it('show username is required', () => {
    signupPage.requiredUserName('agnotest','of signup','agno','agno123','agno123')
  })
  it('show password is required', () => {
    signupPage.requiredPassword('agnotest','of signup','agno','agno123','agno123')
  })
  it('show  confirm password is required', () => {
    signupPage.requiredConfirmPassword('agnotest','of signup','agno','agno123','agno123')
  })
 
})