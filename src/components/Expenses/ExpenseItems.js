import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItems(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Update");
    console.log(title);
  };
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
      </div>
      <div className='expense-item__price'>₹{props.amount}</div>
      <button onClick={clickHandler}>Click to change</button>
    </Card>
  );
}

export default ExpenseItems;
