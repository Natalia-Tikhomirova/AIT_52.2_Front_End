
// Обработчик события на кнопку депозита (пополнение счета)
deposit.onclick = function () {
  // TODO (Описание действия при нажатии на кнопку deposit)

// Получаем значения из полей ввода для Account ID и Amount
  const accountId = document.getElementById("accountId").value.trim();
  const amount = document.getElementById("amount").value.trim();

  if (!accountId || !amount || isNaN(amount) || amount <= 0) {
    alert("Please enter a valid Account ID and Amount.");
    return;
  }

  // Ищем аккаунт в массиве bank с помощью forEach
  let account = null;
  bank.forEach((acc) => {
    if (acc.accountNumber == accountId) {
      account = acc; // Присваиваем найденный аккаунт
    }
  });

  if (account) {
    account.deposit(Number(amount)); // Пополняем баланс через метод `deposit`
    alert("Deposit successful!");
    showAccounts(); // Обновляем список аккаунтов
  } else {
    alert("Account not found.");
  }

  document.getElementById("accountId").value = "";
  document.getElementById("amount").value = "";
};

// Обработчик события на кнопку снятия средств (withdraw)
withdraw.onclick = function () {
  // TODO (Описание действия при нажатии на кнопку withdraw)

  // Получаем значения из полей ввода для Account ID и Amount
  const accountId = document.getElementById("accountId").value.trim();
  const amount = document.getElementById("amount").value.trim();

  if (!accountId || !amount || isNaN(amount) || amount <= 0) {
    alert("Please enter a valid Account ID and Amount.");
    return;
  }

  // Ищем аккаунт в массиве bank с помощью forEach
  let account = null;
  bank.forEach((acc) => {
    if (acc.accountNumber == accountId) {
      account = acc; // Присваиваем найденный аккаунт
    }
  });

  if (account) {
    account.withdraw(Number(amount)); // Вычитаем сумму через метод `withdraw`
    alert("Withdrawal successful!");
    showAccounts(); // Обновляем список аккаунтов
  } else {
    alert("Account not found.");
  }

  // Очищаем поля ввода
  document.getElementById("accountId").value = "";
  document.getElementById("amount").value = "";
};