// import Button from './components/button/button';
import Todo from './components/todo';
import './App.css';

function App() {
  const todos = [
    { id: 1, title: 'wash dishes', completed: false },
    { id: 2, title: 'make dinner', completed: true },
  ];
  return (
    <div className="App">
      <header className="App-header">
        {todos.map(todo => (
          <Todo key={todo.id} {...todo} />
        ))}
        <Todo />
        {/*
	  <Button label="click me" />
	*/}
      </header>
    </div>
  );
}

export default App;
