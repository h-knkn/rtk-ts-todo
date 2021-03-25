import React, {memo} from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import TodoItem from './TodoItem';

const TodoList:React.FC = memo(() => {

    const { todos } = useSelector((state: RootState) => state.todos);
    const todosda = useSelector((state: RootState) => state.todos);
    console.log(todos);
    console.log(todosda);

    return (
        <ul>
        {
            todos.length <= 0 ? '登録されたTODOはありません。' :
            todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))
        }      
        </ul>
    )
});

export default TodoList;
