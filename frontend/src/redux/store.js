import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../redux/slices/TodoSlice";
import TabsReducer from "../redux/slices/TabsSlice";

export default configureStore({
  reducer: {
    todos: TodoReducer,
    tabs: TabsReducer,
  },
});
