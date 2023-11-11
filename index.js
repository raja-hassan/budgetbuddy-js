const balance = document.getElementById('balance');
const incomeDescription = document.getElementById('income-description');
const incomeAmount = document.getElementById('income-amount');
const addIncomeBtn = document.getElementById('add-income');
const expenseDescription = document.getElementById('expense-description');
const expenseAmount = document.getElementById('expense-amount');
const addExpenseBtn = document.getElementById('add-expense');
const transactionList = document.getElementById('transaction-list');

let totalBalance = 0;

addIncomeBtn.addEventListener('click', () => {
    const description = incomeDescription.value;
    const amount = parseFloat(incomeAmount.value);

    if (description.trim() === '' || isNaN(amount) || amount <= 0) {
        alert('Please enter a valid description and amount for income.');
    } else {
        addTransaction(description, amount, 'income');
        incomeDescription.value = '';
        incomeAmount.value = '';
    }
});

addExpenseBtn.addEventListener('click', () => {
    const description = expenseDescription.value;
    const amount = parseFloat(expenseAmount.value);

    if (description.trim() === '' || isNaN(amount) || amount <= 0) {
        alert('Please enter a valid description and amount for the expense.');
    } else {
        addTransaction(description, amount, 'expense');
        expenseDescription.value = '';
        expenseAmount.value = '';
    }
});

function addTransaction(description, amount, type) {
    const transaction = document.createElement('li');
    transaction.classList.add('transaction');
    if (type === 'income') {
        transaction.classList.add('income');
    } else {
        transaction.classList.add('expense');
        amount = -amount;
    }
    transaction.innerHTML = `
        <span>${description}</span>
        <span>${amount.toFixed(2)}</span>
    `;
    transactionList.appendChild(transaction);

    totalBalance += amount;
    updateBalance();
}

function updateBalance() {
    balance.textContent = totalBalance.toFixed(2);
}
