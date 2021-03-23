import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import TodoItem from './TodoItem';

const TodoList:React.FC = () => {

    const { todos } = useSelector((state: RootState) => state.todos);
    const todosda = useSelector((state: RootState) => state.todos);
    console.log(todos);
    console.log(todosda);


    const handleClickGetTodoId = (e: any) => {
        let id = e.currentTarget.getAttribute('data-id');
        console.log(id);
    }

    return (
        <ul>
        {
            todos.length <= 0 ? '登録されたTODOはありません。' :
            todos.map(todo => (
                <TodoItem key={todo.id}  todo={todo} />
            ))
        }      
        </ul>
    )
}

export default TodoList;
