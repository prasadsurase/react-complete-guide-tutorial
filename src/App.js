import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: '1',
      title: 'Toilet Paper',
      amount: 500,
      date: new Date(2020, 7, 14)
    },
    {
      id: '2',
      title: 'Xerox Paper',
      amount: 1500,
      date: new Date(2020, 7, 21)
    },
    {
      id: '3',
      title: 'Tissue Paper',
      amount: 2500,
      date: new Date(2020, 7, 7)
    },
    {
      id: '4',
      title: 'Newspaper',
      amount: 500,
      date: new Date(2020, 7, 28)
    },
  ];

  return (
    <div>
      <h2>Random Expenses</h2>
      <ExpenseItem key={expenses[0].id} title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <ExpenseItem key={expenses[1].id} title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
      <ExpenseItem key={expenses[2].id} title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
      <ExpenseItem key={expenses[3].id} title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
    </div>
  );
}

export default App;
