import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from './Types';

type State = {
    count: number;
    todos: Todo[];
}

type getAction = {
    id: number;
    title: string
}

const initialState: State = {
    count: 1,
    todos: [
        {
            id: 1,
            title: "JavaScript",
            // memo: "１日3時間勉強する",
            isDone: false
        }
    ]
}

const todoSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    addTodo(state: State, action: PayloadAction<string>) {
      state.count++;
      const newTodo: Todo = {
        id: state.count,
        title: action.payload,
        // memo:  action.payload,
        isDone: false,
      };
      state.todos = [...state.todos, newTodo];
    },

    editTodo(state: State, action: PayloadAction<getAction>) {
      const todo = state.todos.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.title = action.payload.title;
        state.todos = [...state.todos];
      }
    },

    doneTodo(state: State, action: PayloadAction<Todo>) {
      const todo = state.todos.find((t) => t.id === action.payload.id);
      console.log(todo);
      console.log(action.payload.id);
      if (todo) {
        todo.isDone = !todo.isDone;
        console.log(action.payload);
      }
    },

    deleteoTodo(state: State, action: PayloadAction<Todo>) {
      state.todos = state.todos.filter((t) => t.id !== action.payload.id);
    },
  },
});

export const {addTodo , editTodo , doneTodo , deleteoTodo} = todoSlice.actions;


export default todoSlice.reducer;