import Data from '../../../../data/database.json';
import SendMoneyPage from '../../../pages/sendMoneyPage.js';

const dados = Data;
const sendMoney = new SendMoneyPage();

describe('Send test money', () => {
  beforeEach(() => {
    sendMoney.accessLoginPage();
  });

  function performTransaction(username, amount, description) {
    sendMoney.loginWithUser(username, 's3cret'); // Simula login
    sendMoney.clickNewSendButton(); // Clica no botão de nova transação
    sendMoney.selectContactUser(); // Seleciona um contato
    sendMoney.sendMoney(amount, description); // Envia dinheiro com validação de saldo
    return;
  };
  it('should fail when sending money without sufficient balance', () => {
    performTransaction(dados.users[1].username, 1000, 's3cret');

  });
  it('should send money with sufficient balance', () => {
    performTransaction(dados.users[4].username, 1, 'SentMoneyForTed');
    
  });
});



