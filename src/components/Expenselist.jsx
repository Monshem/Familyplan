import React from 'react';
import { useState } from 'react';

import TotalSum from '../pages/Expense/Totalsum';
import ExpensForm from '../pages/Expense/ExpensForm';
import ExpenseFilter from '../pages/Expense/ExpenseFilter';
const Expenselist = () => {
  const [expenses, setExpenses] = useState([
    
  ]);

  const addItem = (data) => {
    setExpenses(() => [...expenses, data])
  }

  const deleteItem = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const filterItem = (cat) => {
    setExpenses(expenses.filter(expense => expense.category == cat))
  }
  const inprima = () => {
    window.print()
  }

  return (
    <div>
      <ExpensForm addExpense={addItem} />
      <ExpenseFilter filterItem={filterItem}/>
      <TotalSum inprima={inprima} items={expenses} deleteItem={deleteItem} />
    </div>
  );
};

export default Expenselist;
