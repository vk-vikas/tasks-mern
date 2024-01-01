import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
  },
});

export const {} = TodoSlice.actions;
export default TodoSlice.reducer;
