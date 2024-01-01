import { createSlice } from "@reduxjs/toolkit";
import { getAllTodos, addNewTodo } from "../thunks/TodoThunks";

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
  },
});

export const {} = TodoSlice.actions;
export default TodoSlice.reducer;
