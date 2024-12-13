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
    // Создаем новый объект с независимыми свойствами и методами
    const newAccount = {
      accountNumber: bank.length + 1,                // Уникальный номер счета
      accountHolderName: name,                       // Имя владельца счета
      balance: 0,                                    // Начальный баланс
      deposit: bankAccount.deposit,                  // Наследуем метод `deposit`
      withdraw: bankAccount.withdraw,                // Наследуем метод `withdraw`
      checkBalance: bankAccount.checkBalance,        // Наследуем метод `checkBalance`
    };


    bank.push(newAccount);                           // Добавляем новый аккаунт в массив `bank`
    alert("Account created successfully");           // Уведомляем об успешном создании
  } else {
    alert("Please, enter a valid name");             // Если имя не введено, показываем ошибку
  }

  nameInput.value = "";                              // Очищаем поле ввода после обработки
  showAccounts();
}

function showAccounts() {
  const accountList = document.getElementById("accountList");  // Находим элемент HTML с id="accountList" (список, куда будем добавлять информацию об аккаунтах)

  accountList.innerHTML = "";                                 // Очищаем содержимое списка перед добавлением обновленных данных

    // Перебираем массив `bank` и добавляем информацию о каждом аккаунте в список
  bank.forEach((account, index) => {
     // Создаем элемент списка с кнопкой удаления
     const listItem = document.createElement("li");
     listItem.innerHTML = `
         ${index + 1}. ID: ${account.accountNumber}, 
         Name: ${account.accountHolderName}, 
         Balance: ${account.balance} 
         <button onclick="deleteAccount(${account.accountNumber})">Delete</button>
     `;
     accountList.appendChild(listItem); // Добавляем элемент в список
  });
}

// ДЕБЕТОВАЯ КАРТА (карта не уходящая в минус!)

// Обработчики кнопок для пополнения и снятия средств
const withdraw = document.getElementById('withdraw');
const deposit = document.getElementById('deposit');

// Ссылки на поля ввода
const accountIdInput = document.getElementById("accountId");        // Поле ввода ID аккаунта
const amountInput = document.getElementById("amount");              // Поле ввода суммы

// Обработчик операции пополнения и снятия средств
function operation(operator) {
  const accountId = accountIdInput.value.trim();                   // Получаем строку ID аккаунта из поля ввода
  const amount = +amountInput.value.trim();                        // Преобразуем значение из поля ввода в число (или NaN)
  const accountFind = bank.find(e => e.accountNumber.toString() === accountId); // Находим аккаунт в массиве `bank`

  if (accountFind) {                                               // Если аккаунт найден
    if (operator === 'deposit') {
      accountFind.deposit(amount);                                 // Пополнение
      alert(`Deposit successful! New balance: ${accountFind.balance}`);
    } else if (operator === 'withdraw') {
      accountFind.withdraw(amount);                                // Снятие
      alert(`Withdrawal successful! New balance: ${accountFind.balance}`);
    }
    // Обновляем отображение списка аккаунтов после изменения баланса
    showAccounts();
  } else {
    alert('Account not found');                                   // Если аккаунт не найден, выводим сообщение об ошибке
  }
                                                 

  accountIdInput.value = "";                                      // Очищаем поле ввода ID
  amountInput.value = "";                                         // Очищаем поле ввода суммы
}

function deleteAccount(accountId) {
  // Подтверждение удаления аккаунта
  const confirmDelete = confirm(`Are you sure you want to delete the account with ID ${accountId}?`);
  
  if (confirmDelete) {                                              // Если пользователь подтвердил удаление
      // Находим индекс аккаунта в массиве `bank`
      const accountIndex = bank.findIndex(e => e.accountNumber === accountId);
      
      if (accountIndex !== -1) {                                   // Если аккаунт найден
          bank.splice(accountIndex, 1);                            // Удаляем аккаунт из массива
          alert(`Account with ID ${accountId} has been deleted.`); // Сообщаем об удалении
          showAccounts();                                          // Обновляем список аккаунтов
      } else {
          alert("Account not found");                              // Если аккаунт не найден
      }
  } else {
      alert("Account deletion canceled.");                          // Если пользователь отменил удаление
  }
}