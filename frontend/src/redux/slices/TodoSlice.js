import { createSlice } from "@reduxjs/toolkit";
import {
  getAllTodos,
  addNewTodo,
  toggleDoneTodo,
  updateTodo,
  deleteTodo,
} from "../thunks/TodoThunks";

const initialState = [];
const API_URL = "http://localhost:8000";

export const addNewTodo = createAsyncThunk("todo/addNewTodo", async (data) => {
  const res = await axios.post(`${API_URL}/todos`, { data });
  return res.data;
});

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
