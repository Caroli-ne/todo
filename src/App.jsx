import { useState } from 'react'
import "./App.css";

function App() {
  const[todos, setTodos] = useState([
    {
      id:1,
      text: "Criar funcionalidade no sistema",
      category:"Trabalho",
      completed:false,
    },
    {
      id:2,
      text:"Ir para a academia",
      category:"Pessoal",
      completed:false,
    },
    {
      id:3,
      text:"Estudar React",
      category:"Estudos",
      completed:false,
    },
  ]);

  return <div className="app">
    <h1>Lista de Tarefas</h1>
    <div className="todoList">
      {todos.map((todo) => (
        <div className="todo">
          <div className="content">
            <p>{todo.text}</p>
            <p className="category">{todo.category}</p>
          </div>
          <div>
            <button>Completar</button>
            <button>Editar</button>
            <button>X</button>
          </div>
        </div>
      ))}
    </div>
  </div>;
}

export default App