import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import "./Todos.css";
import { getAllTodos } from "../redux/thunks/TodoThunks";

const Todos = () => {
  const todoState = useSelector((state) => state.todos);
  const currentTab = useSelector((state) => state.tabs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  const getTabTodos = () => {
    if (currentTab === "All") {
      return todoState;
    } else if (currentTab === "Done") {
      return todoState.filter((todo) => todo.done === true);
    } else {
      return todoState.filter((todo) => todo.done === false);
    }
  };

  return (
    <ul className="todos">
      {getTabTodos().map((todo) => (
        <Todo todo={todo} key={todo.title} />
      ))}
    </ul>
  );
};

export default Todos;
