import React, { useState, useCallback, memo } from "react";
import styled from 'styled-components';
import { useDispatch , useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { editTodo } from './todoSlice';


type Props = {
  handleCancelEditClick: () => void;
  todoId: number;
  todoTitle: string;
};

const TodoEditInput:React.FC<Props> = memo((props) => {

    const dispatch = useDispatch();


    const {todos} = useSelector((state: RootState) => state.todos);
    console.log(todos);

    const[ inputEditTitle, setInputEditTitle ] = useState('');

    const handleEditChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) : void => {
        setInputEditTitle(e.target.value);
    },[setInputEditTitle])

    const hundleEditSubmit = () => {
        // 空白の時の入力制御
        if(!inputEditTitle.trim()) {
            return
        }
        const data = {
          id: props.todoId,
          title: inputEditTitle,
        }
        dispatch(editTodo(data));
        setInputEditTitle("");
    }
    

    return (
      <SContainer>
        <input
          type="text"
          value={inputEditTitle}
          onChange={handleEditChange}
        />
        <SButton onClick={hundleEditSubmit}>編集</SButton>
        <SButton onClick={() => props.handleCancelEditClick()}>
          キャンセル
        </SButton>
      </SContainer>
    );
});

export default TodoEditInput

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

const SContainer = styled.div`
  margin: 20px 0;
`;

