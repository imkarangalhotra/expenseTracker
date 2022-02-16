import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm.js";
import "./NewExpense.css";
function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpense) => {
    const expenseData = {
      ...enteredExpense,
      id: Math.random.toString(),
    };
    props.onNewExpense(expenseData);
    setIsEditing(false);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add new Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onCancel={stopEditingHandler}
          onSaveExpenseData={onSaveExpenseDataHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
