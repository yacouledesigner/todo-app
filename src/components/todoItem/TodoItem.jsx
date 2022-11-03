import { useDispatch } from 'react-redux';
import { removeTodo } from '../../toolkit/slice/todoSlice';
import './todoItem.css'

const TodoItem = ({text,id}) => {

    const dispatch = useDispatch()

    const handleRemove = () => dispatch(removeTodo({id:id}))

    return (
        <div className='todo-item'>
            <p>{text}</p>
            <button onClick={handleRemove}>Supprimer</button>
        </div>
    );
};

export default TodoItem;