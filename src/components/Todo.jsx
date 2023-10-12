import React from 'react'

const Todo = ({todo, deleteTodo, completeTodo}) => {
return (
<div className="todo" style={{textDecoration: todo.completed ? "line-through": ""}}>
    <div className="content">
        <p>{todo.text}</p>
        <p className="category">{todo.category}</p>
    </div>
    <div>
        <button className='complete' onClick={() => completeTodo(todo.id)}>Completar</button>
        <button className='edit'>Editar</button>
        <button className='delete' onClick={() => deleteTodo(todo.id)}>X</button>
    </div>
</div>
)
}

export default Todo