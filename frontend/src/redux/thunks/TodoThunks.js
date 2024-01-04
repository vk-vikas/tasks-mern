import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8000";

export const addNewTodo = createAsyncThunk(
  "todos/addNewTodo",
  async (title) => {
    const res = await axios.post(`${API_URL}/todos`, { title });
    return res.data;
  }
);

export const getAllTodos = createAsyncThunk("todos/getAllTodos", async () => {
  const res = await axios.get(`${API_URL}/todos`);
  return res.data;
});

export const toggleDoneTodo = createAsyncThunk(
  "todos/toggleDoneTodo",
  async (id) => {
    const res = await axios.get(`${API_URL}/todos/${id}`);
    return res.data;
  }
);

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async ({ id, text }) => {
    const res = await axios.put(`${API_URL}/todos/${id}`, { text });
    return res.data;
  }
);

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
  const res = await axios.delete(`${API_URL}/todos/${id}`);
  return res.data;
});
