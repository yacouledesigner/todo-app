import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../toolkit/slice/todoSlice';
import './addTodo.css'

const AddTodo = () => {
    const [input, setInput] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim().length === 0) {
            alert('Veuillez entrer une tâche')
        }else{
            dispatch(addTodo({text:input}))
        }
    }
    return (
        <div className='add-todo'>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Entrez une tâche</label> <br />
                <input type="text" name="todo" id="todo" onChange={(e)=>setInput(e.target.value)}/> <br />
                <button type="submit" className='btn'>Ajouter</button>
            </form>
        </div>
    );
};

export default AddTodo;