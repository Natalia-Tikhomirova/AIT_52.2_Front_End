// DEBIT CARD

let bankAccount = {
  accountNumber: "123456789",
  accountHolderName: "Alice",
  balance: 0,
};

// this.balance += sum
bankAccount.deposit = function (sum) {
  sum >= 5 && sum <= 5000
    ? (this.balance += sum)
    : alert("Некорректная сумма пополнения"); // this.balance = this.balance + sum
};

// this.balance -= sum
// Бизнес-логика
bankAccount.withdraw = function (sum) {
  sum <= this.balance && sum > 0
    ? (this.balance -= sum)
    : alert("Некорректная сумма списания");
};

// Просмотр баланса
bankAccount.checkBalance = function () {
  console.log(`Баланс Вашего аккаунта равен: ${this.balance}`);
};

const bank = [];

function createAccount() {
  const nameInput = document.getElementById("name"); // Находим элемент HTML с id="name" (поле ввода имени)
  const name = nameInput.value.trim();               // Получаем текст, введенный в поле, и удаляем пробелы в начале и конце строки

  // Проверяем, был ли введен текст (name не должен быть пустым)
  if (name) {
    // Если имя введено, создаем новый аккаунт, добавляем его в массив bank
    bank.push({
      ...bankAccount,                             // Копируем все свойства из объекта bankAccount
      accountNumber: bank.length + 1,             // Генерируем номер аккаунта как текущую длину массива + 1
      accountHolderName: name,                    // Устанавливаем имя владельца аккаунта
    });
    
    alert("Account created successfully");        // Уведомляем пользователя, что аккаунт успешно создан
  } else {
    alert("Please, enter a valid name");          // Если имя не введено или введено некорректно, выводим сообщение об ошибке
  }

  nameInput.value = "";                           // Очищаем поле ввода после обработки
  console.log(bank);
}

function showAccounts() {
  const accountList = document.getElementById("accountList");  // Находим элемент HTML с id="accountList" (список, куда будем добавлять информацию об аккаунтах)

  accountList.innerHTML = "";                                 // Очищаем содержимое списка перед добавлением обновленных данных

    // Перебираем массив `bank` и добавляем информацию о каждом аккаунте в список
  bank.forEach((account, index) => {
    // Добавляем новую строку `<li>` с информацией о текущем аккаунте
    accountList.innerHTML += `<li>${index + 1}. ID: ${
      account.accountNumber
    }, Name: ${account.accountHolderName}, Balance: ${account.balance}</li>`;
  });
}

// ДЕБЕТОВАЯ КАРТА (карта не уходящая в минус!)

const withdraw = document.getElementById('withdraw');
const deposit = document.getElementById('deposit');


// Обработчик события на кнопку депозита (пополнение счета)
deposit.onclick = function () {
  // TODO (Описание действия при нажатии на кнопку deposit)

  const accountId = document.getElementById("accountId").value.trim();     // Получаем ID аккаунта из поля ввода 
  const amount = document.getElementById("amount").value.trim();           // Получаем сумму из поля ввода

  if (!(accountId && amount > 0)) {                                        // Проверяем, что ID и сумма введены корректно
      alert("Please enter a valid Account ID and Amount.");
      return; 
  }

  bank.forEach((account) => {                                               // Перебираем массив `bank`
      if (account.accountNumber == accountId) {                             // Находим аккаунт с указанным ID
          account.deposit(Number(amount));                                  // Вызываем метод `deposit` объекта аккаунта
          alert(`Deposit successful! New balance: ${account.balance}`);     // Показываем обновленный баланс
      }
  });

  showAccounts();                                                            // Обновляем список аккаунтов на странице
  document.getElementById("accountId").value = "";                           // Очищаем поле ввода ID
  document.getElementById("amount").value = "";                              // Очищаем поле ввода суммы
};

// Обработчик события на кнопку снятия средств (withdraw)
withdraw.onclick = function () {
  // TODO (Описание действия при нажатии на кнопку withdraw)

  const accountId = document.getElementById("accountId").value.trim();       // Получаем ID аккаунта из поля ввода
  const amount = document.getElementById("amount").value.trim();             // Получаем сумму из поля ввода

    if (!(accountId && amount > 0)) {                                        // Проверяем, что ID и сумма введены корректно
        alert("Please enter a valid Account ID and Amount.");
        return; 
    }

    bank.forEach((account) => {                                              // Перебираем массив `bank`
        if (account.accountNumber == accountId) {                            // Находим аккаунт с указанным ID
            account.withdraw(Number(amount));                                // Вызываем метод `withdraw` объекта аккаунта
            alert(`Withdrawal successful! New balance: ${account.balance}`); // Показываем обновленный баланс
        }
    });

    showAccounts();                                                          // Обновляем список аккаунтов на странице
    document.getElementById("accountId").value = "";                         // Очищаем поле ввода ID
    document.getElementById("amount").value = "";                            // Очищаем поле ввода суммы
};