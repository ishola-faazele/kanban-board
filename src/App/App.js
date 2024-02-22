import { useState, useEffect } from 'react';
import './App.css';
import Header from '../Features/Header';
//import RenderTodo from '../Features/RenderTodo';
import DisplayTodos from '../Features/DisplayTodos';
import CreateTodo from '../Features/CreateTodo';

function App() {
  const [todos, setTodos] = useState([
  ])
  //const todo = todos[0];
  
  return (
    <div className="App" id='App'>
      <Header />
      <div className='todo-sections'>
        <DisplayTodos todos={todos} status='pending' setTodos={setTodos} />
        <DisplayTodos todos={todos} status='started' setTodos={setTodos} />
        <DisplayTodos todos={todos} status='completed' setTodos={setTodos} />
      </div>
      <CreateTodo todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
