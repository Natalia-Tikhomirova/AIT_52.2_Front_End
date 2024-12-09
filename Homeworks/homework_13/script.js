/* Создать объект bankAccount (DEBIT CARD), который:

1. accountNumber: "123456789"
2. accountHolderName: "Alice"
3. balance: 0
4. deposit(sum) { TODO Пополнение счёта }
5. withdraw(sum) { TODO Списание счёта }
6. checkBalance() { TODO Просмотр баланса счёта } */


let bankAccount = {
    accountNumber: "123456789",
    accountHolderName: "Alice",
    balance: 0,

// deposit(sum) { TODO Пополнение счёта }

deposit(sum){
    this.balance += sum;
    console.log(`Счет пополнен на ${sum}.`);
},

// withdraw(sum) { TODO Списание счёта }

withdraw(sum){

    this.balance -= sum;
    console.log (`Со счета списано ${sum}.`);
},

// checkBalance() { TODO Просмотр баланса счёта }

checkBalance(){

    console.log(`Текущий баланс ${this.balance}`);
}

};

bankAccount.deposit(1000);
bankAccount.withdraw(600);
bankAccount.checkBalance();