import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');

  const enteredTitleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const enteredDateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const enteredAmountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={enteredTitleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" onChange={enteredDateHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" onChange={enteredAmountHandler} />
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;