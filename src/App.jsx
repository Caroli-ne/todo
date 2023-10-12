import { useState } from 'react'
import "./App.css";

import Todo from './components/Todo';
import Todoform from './components/Todoform';
import Search from './components/Search';

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

  const addTodo = (text, category) =>{
    
    const newTodos = [...todos,{
      id:Math.floor(Math.random() * 10000),
      text,
      category,
      completed: false,
    },
  ];
  setTodos(newTodos);
};

const deleteTodo = (id) => {
  const newTodos = [...todos]
  const filteredTodos = newTodos.filter((todo) => 
    todo.id !== id ? todo:null
  );
  setTodos(filteredTodos);
}

const completeTodo = (id) => {
  const newTodos = [...todos]
  newTodos.map((todo) => todo.id === id? todo.completed = !todo.completed :todo )
  setTodos(newTodos);
}

const [search,setSearch] = useState("");



  return <div className="app">
    <h1>Lista de Tarefas</h1>
    <Search search={search} setSearch={setSearch}/>
    <div className="todoList">
      {todos.filter((todo) => todo.text.toLowerCase().includes(search.toLocaleLowerCase())
      ).map((todo) => (
        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />
      ))}
    </div>
    <Todoform addTodo={addTodo}/>
  </div>;
}

export default App