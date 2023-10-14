import {useState} from 'react'

const EditTodoForm = ({ editTodo, todo }) => {
    const [value, setValue] = useState (todo.text)
    const [category, setCategory] = useState (todo.category)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value || !category) return;
        editTodo(value,category, todo.id);
        setValue("");
        setCategory("");
    }

return ( <div className='todoForm'>
    <h2>Editar tarefa:</h2>
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Insira uma nova tarefa' value={value} onChange={(e) => setValue(e.target.value) }></input>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="" >Selecione o tipo de tarefa</option>
            <option value="Urgente">Urgente</option>
            <option value="Importante">Importante</option>
            <option value="Circunstancial">Circunstancial</option>
        </select>
        <button type='submit'>Atualizar tarefa</button>     
    </form>
    </div>
)
}

export default EditTodoForm