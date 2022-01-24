import React from "react";
import ExpenseForm from "./ExpenseForm.js";
import "./NewExpense.css";
function NewExpense(props) {
  const onSaveExpenseDataHandler = (enteredExpense) => {
    const expenseData = {
      ...enteredExpense,
      id: Math.random.toString(),
    };
    props.onNewExpense(expenseData);
  };
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
