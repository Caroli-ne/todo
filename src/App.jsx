import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import "./App.css";
import Todo from './components/Todo';
import Todoform from './components/Todoform';
import Search from './components/Search';
import Filter from './components/Filter';
import EditTodoForm from './components/EditTodoForm';

function App() {
  const[todos, setTodos] = useState([
    {
      id:1,
      text: "Comprar ração para os gatos",
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
      text:"Passear no parque",
      category:"Circunstancial",
      completed:false,
    },
  ]);

  const addTodo = (text, category) =>{
    
    const newTodos = [...todos,{
      id:uuidv4(),
      text,
      category,
      completed: false,
    },
  ];
  setTodos(newTodos);
};

const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

const completeTodo = (id) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
}

const editTodo = (id) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
    )
  );
}

const editTask = (text, category, id) => {
  setTodos(
    todos.map((todo) =>
      todo.id === id ? { ...todo, text, category, isEditing: !todo.isEditing } : todo
    )
  );
};


const [search,setSearch] = useState("");
const [filter, setFilter] = useState("All");
const [sort, setSort] = useState("Asc");

  return <div className="app">
    <h1>Lista de Tarefas</h1>
    <Search search={search} setSearch={setSearch}/>
    <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
    <div className="todoList">
      {todos
      .filter((todo) => filter === "All" ? true : filter === "Completed" ? todo.completed : !todo.completed)
      .filter((todo) => todo.text.toLowerCase().includes(search.toLocaleLowerCase()))
      .sort((a, b) => sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
      .map((todo) => 
      todo.isEditing ? (
        <EditTodoForm editTodo={editTask} todo={todo} />
      ) : (
        <Todo
          key={todo.id} 
          todo={todo} 
          deleteTodo={deleteTodo} 
          completeTodo={completeTodo} 
          editTodo={editTodo} />
      ))}
    </div>
    <Todoform addTodo={addTodo}/>
  </div>;
}

export default App