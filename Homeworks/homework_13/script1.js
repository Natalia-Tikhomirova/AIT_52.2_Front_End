let bankAccount = {
    accountNumber: "123456789",
    accountHolderName: "Alice",
    balance: 0
}
// this.balance += sum
bankAccount.deposit = function(sum) {
    sum >= 5 && sum <= 5000 ? this.balance += sum : alert("Некорректная сумма пополнения") // this.balance = this.balance + sum
}
// this.balance -= sum
// Бизнес-логика
bankAccount.withdraw = function(sum) {
    sum <= this.balance && sum > 0 ? this.balance -= sum : alert("Некорректная сумма списания")
}
// Просмотр баланса
bankAccount.checkBalance = function() {
    console.log(`Баланс Вашего аккаунта равен: ${this.balance}`);
}