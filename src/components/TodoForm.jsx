import {useState} from 'react'

const Todoform = ({ addTodo }) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value || !category) return;
        addTodo(value,category);
        setValue("");
        setCategory("");
    }

return ( <div className='todoForm'>
    <h2>Nova tarefa:</h2>
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Insira uma tarefa' value={value} onChange={(e) => setValue(e.target.value) }></input>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="" >Selecione o tipo de tarefa</option>
            <option value="Urgente">Urgente</option>
            <option value="Importante">Importante</option>
            <option value="Circunstancial">Circunstancial</option>
        </select>
        <button type='submit'>Criar tarefa</button>
    </form>
    </div>
)
}

export default Todoform