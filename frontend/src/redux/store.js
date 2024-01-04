import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../redux/slices/TodoSlice";

export default configureStore({
  reducer: {
    todos: TodoReducer,
  },
});
