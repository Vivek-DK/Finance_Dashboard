// src/utils/calculations.js

/**
 * Calculate total income
 */
export const getTotalIncome = (transactions) => {
  return transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);
};

/**
 * Calculate total expense
 */
export const getTotalExpense = (transactions) => {
  return transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);
};

/**
 * Calculate balance
 */
export const getBalance = (transactions) => {
  const income = getTotalIncome(transactions);
  const expense = getTotalExpense(transactions);
  return income - expense;
};