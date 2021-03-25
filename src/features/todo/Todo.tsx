import React from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

const Todo:React.FC = () => {

    return (
        <>
            <TodoInput />
            <TodoList />
        </>
    )
}

export default Todo
