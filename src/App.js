import Expenses from './components/Expenses/Expenses';

const App = (() => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.67,
      date: new Date(2021, 12, 6),
    },
    {
      id: 'e2',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 4, 25),
    },
    {
      id: 'e3',
      title: 'Something else',
      amount: 24.67,
      date: new Date(2021, 2, 18),
    },
    {
      id: 'e4',
      title: 'New Desk - Wooden',
      amount: 2.67,
      date: new Date(2021, 6, 8),
    },
  ];

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, 'let s get started'),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
});

export default App;
