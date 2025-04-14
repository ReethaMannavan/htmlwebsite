// JS84. Create a BankAccount constructor with accountNumber, balance, and methods to deposit and withdraw money. 



function Bank (customeraccno, balance, amount, withdraw) {

    this.customer = customeraccno;
    this.balance = balance;
    this.amount = amount;
    this.withdraw = withdraw;

    this.currentCustomers = {
      account: 0

    },

    this.printAccount = function () {
    return `${this.customer}'s new balance is ${this.balance}`;
    },

    this.deposit = function () {
      return `${this.customer}'s new balance after deposit is ${balance + this.amount}`;
    },

    

    this.withdraw = function (withdraw) {
        if (amount <= 0 || amount > this.balance){
                    return "Insufficient balance or invalid amount."
                  }
                  this.transactions.push({ amount: -amount });
                  this.balance -= amount;
                  return `Successfully withdrew $${amount}. New balance: $${this.balance}`
    }

    

  }
  

  const newBank = new Bank('SB44521230');
  console.log(newBank.customer);

  const newBank1 = new Bank('SB44521230SBI', 0);
  console.log(newBank1.printAccount());

  const newBank2 = new Bank ('SB44521230SBI', 0, 500);
  console.log(newBank2.deposit());  

  const newBank3 = new Bank ('SB44521230SBI', 0, 200);
  console.log(newBank3.withdraw());  











//   class BankAccount {
//     constructor() {
//       this.transactions = [];
//       this.balance = 0;
//     }
  
//     // Method to deposit money into the account
//     deposit(amount) {
//       this.transactions.push({ amount });
//       this.balance += amount;
//       if (amount <= 0){
//         return "Deposit amount must be greater than zero."
//       }
//       return `Successfully deposited $${amount}. New balance: $${this.balance}` 
//     }
  
//     // Method to withdraw money from the account
//     withdraw(amount) {
//       if (amount <= 0 || amount > this.balance){
//         return "Insufficient balance or invalid amount."
//       }
//       this.transactions.push({ amount: -amount });
//       this.balance -= amount;
//       return `Successfully withdrew $${amount}. New balance: $${this.balance}`
//     }
  
//     // Method to get the balance of the account
//     checkBalance() {
//       return `Current balance: $${this.balance}`;
//     }
  
//     // Method to list all deposits
//     listAllDeposits() {
//       let deposits = [];
//       for (let i = 0; i < this.transactions.length; i++) {
//         if (this.transactions[i].amount > 0) {
//           deposits.push(this.transactions[i].amount);
//         }
//       }
//       return "Deposits: " + deposits.join(',');
//     }
  
//     // Method to list all withdrawals
//     listAllWithdrawals() {
//       let withdrawals = [];
//       for (let i = 0; i < this.transactions.length; i++) {
//         if (this.transactions[i].amount < 0) {
//           withdrawals.push(Math.abs(this.transactions[i].amount));
//         }
//       }
//       return "Withdrawals: " + withdrawals.join(',');
//     } 
//   }
  
//   let myAccount = new BankAccount()
  
  
//   console.log(myAccount.deposit(200))
//   console.log(myAccount.withdraw(20))
//   console.log(myAccount.deposit(10))
//   console.log(myAccount.withdraw(50))
  
//   console.log(myAccount.checkBalance())
  
//   console.log(myAccount.deposit(30))
//   console.log(myAccount.withdraw(100))
//   console.log(myAccount.deposit(90))
  
//   console.log(myAccount.checkBalance())
  
//   console.log(myAccount.listAllDeposits())
//   console.log(myAccount.listAllWithdrawals())