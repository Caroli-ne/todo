import { useState } from 'react'
import "./App.css";
import Todo from './components/Todo';
import Todoform from './components/Todoform';

function App() {
  const[todos, setTodos] = useState([
    {
      id:1,
      text: "Criar funcionalidade no sistema",
      category:"Urgente",
      completed:false,
    },
    {
      id:2,
      text:"Consertar o cano da pia",
      category:"Importante",
      completed:false,
    },
    {
      id:3,
      text:"Estudar React",
      category:"Circunstancial",
      completed:false,
    },
  ]);

  return <div className="app">
    <h1>Lista de Tarefas</h1>
    <div className="todoList">
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
    <Todoform />
  </div>;
}

export default App