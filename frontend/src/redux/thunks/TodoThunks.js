import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8000";

export const addNewTodo = createAsyncThunk("todos/addNewTodo", async (data) => {
  const res = await axios.post(`${API_URL}/todos`, { data });
  return res.data;
});

export const getAllTodos = createAsyncThunk("todos/getAllTodos", async () => {
  const res = await axios.get(`${API_URL}/todos`);
  return res.data;
});
