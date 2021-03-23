import React , { useState, useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch , useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { addTodo, editTodo } from './todoSlice';

const TodoInput:React.FC  = () => {
    const dispatch = useDispatch();

    const { todos } = useSelector((state: RootState) => state.todos);

    const[ inputTitle, setInputTitle ] = useState('');

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) : void => {
        setInputTitle(e.target.value);
    },[setInputTitle])

    const hundleAddSubmit = () => {
        // 空白の時の入力制御
        if(!inputTitle.trim()) {
            return
        }
        dispatch(addTodo(inputTitle));
        setInputTitle("");
    }

    const hundleEditSubmit = () => {
        // 空白の時の入力制御
        if(!inputTitle.trim()) {
            return
        }
        dispatch(editTodo(inputTitle));
        setInputTitle("");
    }

    return (
        <div>
            <input type="text" value={inputTitle} onChange={handleChange}/>
            <SButton onClick={() => hundleAddSubmit}>追加</SButton>
        </div>
    )
}

export default TodoInput

const SButton = styled.button`
  background-color: #FFCC66;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 10px; 
  &: hover {
      opacity: 0.7;
  }
`;
