import React from 'react'

const Todoform = () => {
return ( <div className='todoForm'>
    <h2>Nova tarefa:</h2>
    <form>
        <input type='text' placeholder='Insira uma tarefa'></input>
        <select>
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