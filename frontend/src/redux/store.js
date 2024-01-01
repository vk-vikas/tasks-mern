import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../redux/slices/TodoSlice";

export default configureStore({
  reducer: {
    Todo: TodoReducer,
  },
});
