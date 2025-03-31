import Data from '../../../../data/database.json';
import LoginPage from '../../../pages/loginPage.js';
import SendMoneyPage from '../../../pages/sendMoneyPage.js';

const dados = Data;
const loginPage = new LoginPage();
const sendMoney = new SendMoneyPage();

describe('Send test money', () => {
  beforeEach(() => {
    loginPage.accessLoginPage();
  });

  function performTransaction(username, amount, description) {
    loginPage.loginWithUser(username, 's3cret'); // Simula login
    sendMoney.clickNewSendButton(); // Clica no botão de nova transação
    sendMoney.selectContactUser(); // Seleciona um contato
    sendMoney.sendMoney(amount, description); // Envia dinheiro com validação de saldo
  }
  it('should fail when sending money without sufficient balance', () => {
    performTransaction(dados.users[1].username, 1, 's3cret');

  });
  it('should send money with sufficient balance', () => {
    performTransaction(dados.users[3].username, 1, 'SentMoneyForTed');
    
  });
});



