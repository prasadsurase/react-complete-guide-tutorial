import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    {
      id: '1',
      title: 'Craft Paper',
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

  const onSaveExpenseHandler = (expense) => {
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onSaveExpense={onSaveExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
