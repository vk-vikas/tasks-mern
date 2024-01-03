import { createSlice } from "@reduxjs/toolkit";
import {
  getAllTodos,
  addNewTodo,
  toggleDoneTodo,
  updateTodo,
  deleteTodo,
} from "../thunks/TodoThunks";

const initialState = [];

const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addNewTodo.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(getAllTodos.fulfilled, (state, action) => {
      // cannot assign value to state directly , state = something wont work . must return new value
      return [...action.payload];
    });
    builder.addCase(toggleDoneTodo.fulfilled, (state, action) => {
      return state.map((todo) =>
        todo._id === action.payload._id ? { ...todo, done: !todo.done } : todo
      );
    });
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      return [...action.payload];
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      return state.filter((todo) => todo._id !== action.payload._id);
    });
  },
});

export const {} = TodoSlice.actions;
export default TodoSlice.reducer;
