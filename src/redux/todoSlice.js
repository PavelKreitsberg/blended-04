import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: { todos: [] },
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    deletTodo(state, action) {
      state.todos = state.todos.filter(item => item.id !== action.payload);
    },
  },
});

export const { addTodo, deletTodo } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
