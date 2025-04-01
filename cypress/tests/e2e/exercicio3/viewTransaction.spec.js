
import viewTransactionPage from '../../../pages/viewTransactionPage.js';

const viewTransaction = new viewTransactionPage();

describe('Test  view transaction', () => {
    beforeEach(() => {
        viewTransaction.accessLoginPage();
    });
   
    it('should see the page of transaction with success', () => { 
        viewTransaction.loginWithUser('admin', 'admin123');
    });
    it('should fail when try  to see the page of transaction', () => {
        viewTransaction.viewTransactionFail('admin', 'admin123');
       
    });
});



