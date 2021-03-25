import React, { useState, memo } from "react";
import styled from 'styled-components';
import { Todo } from './Types';
import { useDispatch } from 'react-redux';
import { AiOutlineEdit } from "react-icons/ai";
import { AiTwotoneDelete } from "react-icons/ai";
import { doneTodo, deleteoTodo } from './todoSlice';
import TodoEditInput from  './TodoEditInput'

type Props = {
  todo: Todo
}

 const TodoItem:React.FC<Props>  = memo(({todo}) => {

    const dispatch = useDispatch();

    const [isEditMode, setIsEditMode] = useState(false);
    const [todoId, setTodoId] = useState(0);
    const [todoTitle, setTodoTitle] = useState("");

    const handleClickGetTodo = (e: any): void => {
      let id = e.currentTarget.getAttribute("data-id");
      const resultId = Number(id);
      const title = e.currentTarget.getAttribute("data-title");
      setTodoTitle(title);
      setTodoId(resultId);
    };

    const handleEditClick = (): void => {
        setIsEditMode(true);
    };

    const handleCancelEditClick = (): void => {
        setIsEditMode(false);
    };

    return (
      <Slist>
        <label className={todo.isDone ? "done" : ""}>
          <input
            type="checkbox"
            className="checkbox-input"
            defaultChecked={todo.isDone}
            onClick={() => dispatch(doneTodo(todo))}
          />
          <STitle className="checkbox-label">{todo.title}</STitle>
        </label>
        <SButton onClick={handleEditClick}>
          <AiOutlineEdit
            data-id={todo.id}
            data-title={todo.title}
            data-done={todo.isDone}
            onClick={handleClickGetTodo}
          />
        </SButton>
        <SButton
          className="primary"
          onClick={() => dispatch(deleteoTodo(todo))}
        >
          <AiTwotoneDelete />
        </SButton>
        {isEditMode && (
          <TodoEditInput
            handleCancelEditClick={handleCancelEditClick}
            todoId={todoId}
            todoTitle={todoTitle}
          />
        )}
      </Slist>
    );
});

export default TodoItem


const Slist = styled.li`
  list-style: none;
  margin: 10px 0;
  dislay: flex;
`;

const STitle = styled.span`
  display: inline-blok;
  margin-right: 30px;
`;

const SButton = styled.button`
  background-color: #EEEEEE;
  border: none; 
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 10px;
  margin-right: 10px;
  &: hover {
      opacity: 0.7;
  }
`;