import './App.css';
import TodoList from './components/todoList/TodoList';
import AddTodo from './components/addTodo/AddTodo';

function App() {
  return (
    <div className="App">
      <AddTodo/>
      <TodoList/>
    </div>
  );
}

export default App;
