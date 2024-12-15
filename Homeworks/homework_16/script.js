// DEBIT CARD

let bankAccount = {
  accountNumber: "123456789",
  accountHolderName: "Alice",
  balance: 0,
};

// Шаблон объекта аккаунта
const bankAccountTemplate = {
  deposit(sum) {
    if (sum >= 5 && sum <= 5000) {
      this.balance += sum;
    } else {
      alert("Некорректная сумма пополнения");
    }
  },
  withdraw(sum) {
    if (sum <= this.balance && sum > 0) {
      this.balance -= sum;
    } else {
      alert("Некорректная сумма списания");
    }
  },
  checkBalance() {
    alert(`Баланс Вашего аккаунта равен: ${this.balance}`);
  }
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
      ...bankAccountTemplate                         // Добавляем методы из шаблона
    };


    bank.push(newAccount);                           // Добавляем новый аккаунт в массив `bank`
    alert("Account created successfully");           // Уведомляем об успешном создании
  } else {
    alert("Please, enter a valid name");             // Если имя не введено, показываем ошибку
  }

  nameInput.value = "";                              // Очищаем поле ввода после обработки
  showAccounts();
}

// Отображение списка аккаунтов
function showAccounts() {
  const accountList = document.getElementById("accountList"); // Находим элемент для списка аккаунтов
  accountList.innerHTML = "";                                 // Очищаем список перед добавлением новых данных

  // Перебираем массив bank и добавляем информацию о каждом аккаунте
  bank.forEach((account, index) => {
    const listItem = document.createElement("li");
    
    // Создаем флажок для выбора
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.dataset.id = account.accountNumber;              // Связываем флажок с ID аккаунта

    // Создаем кнопку для удаления аккаунта
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick =  () => deleteAccount(account.accountNumber);    

    // Добавляем флажок, данные и кнопку в список
    listItem.appendChild(checkbox);
    listItem.appendChild(document.createTextNode(
      ` ${index + 1}. ID: ${account.accountNumber}, Name: ${account.accountHolderName}, Balance: ${account.balance} `)
    );
    listItem.appendChild(deleteButton);
    
    accountList.appendChild(listItem);                     // Добавляем элемент в список
  });
}


// ДЕБЕТОВАЯ КАРТА (карта не уходящая в минус!)

// Обработчик операции пополнения и снятия средств

function operation(operator) {

  // Ссылки на поля ввода
  const accountIdInput = document.getElementById("accountId");     // Поле ввода ID аккаунта
  const amountInput = document.getElementById("amount");           // Поле ввода суммы

  const accountId = accountIdInput.value.trim();                   // Получаем строку ID аккаунта из поля ввода
  const amount = Number(amountInput.value.trim());                 // Преобразуем значение из поля ввода в число (или NaN)
  if (isNaN(accountId) || isNaN(amount) || amount <= 0) {
    alert("Please, enter a valid account ID and amount.");
    return;
  }
  
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

 document.getElementById("accountId").value = "";                 // Очищаем поле ввода ID
 document.getElementById("amount").value ="";                     // Очищаем поле ввода суммы
}

function deleteAccount(accountId) {
  // Подтверждение удаления аккаунта
  const confirmDelete = confirm(`Are you sure you want to delete the account with ID ${accountId}?`);

  if (confirmDelete) {
    // Находим индекс аккаунта в массиве `bank`
    const accountIndex = bank.findIndex(e => e.accountNumber === accountId);

    if (accountIndex !== -1) {
      bank.splice(accountIndex, 1);                               // Удаляем аккаунт из массива
      alert(`Account with ID ${accountId} has been deleted.`);    // Сообщаем об удалении
      showAccounts();                                             // Обновляем список аккаунтов
    } else {
      alert("Account not found");                                 // Если аккаунт не найден
    }
  } else {
    alert("Account deletion canceled.");                          // Если пользователь отменил удаление
  }
}

function deleteSelected() {
  const selectedAccounts = document.querySelectorAll('input[type="checkbox"]:checked');
  selectedAccounts.forEach(checkbox => {
    const accountId = Number(checkbox.dataset.id);                 // Убедимся, что ID аккаунта преобразуется в число
    deleteAccount(accountId);                                     // Удаляем аккаунт
  });
  showAccounts();                                                 // Обновляем список после удаления
}