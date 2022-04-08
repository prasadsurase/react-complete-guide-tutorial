import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from './../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const expenses = props.expenses;
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpenseItem key={expenses[0].id} title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <ExpenseItem key={expenses[1].id} title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
      <ExpenseItem key={expenses[2].id} title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
      <ExpenseItem key={expenses[3].id} title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
    </Card>
  );
};

export default Expenses;