import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"


const Todo = ({todo, deleteTodo, completeTodo, editTodo}) => {
return (
<div className="todo" style={{textDecoration: todo.completed ? "line-through": ""}}>
    <div className="content">
        <p>{todo.text}</p>
        <p className="category">{todo.category}</p>
    </div>
    <div>
        <FontAwesomeIcon icon={faCheckCircle} color="#6DB65B" className='complete' onClick={() => completeTodo(todo.id)}/>
        <FontAwesomeIcon className="edit" icon={faPenToSquare}  onClick={() => editTodo(todo.id)} />
        <FontAwesomeIcon className="delete" icon={faTrash} onClick={() => deleteTodo(todo.id)} />
    </div>
</div>
)
}

export default Todo