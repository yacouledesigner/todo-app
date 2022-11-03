import { useSelector } from 'react-redux'
import TodoItem from '../todoItem/TodoItem'
import './todoList.css'


function TodoList() {
    const todos = useSelector((state)=> state.todo );
    console.log(todos);

    return (
        <>
        <div className='todo-list'>
            {
                todos.map((todo)=> <TodoItem key={todo.id} text={todo.text} id={todo.id}/>)
            }
        </div>
        <p className='number'>
            Vous avez {todos.length}  
            <span>
                {todos.length <= 1 ? ' tache': 'taches'}
            </span> 
        </p>
        </>
    )
}

export default TodoList
