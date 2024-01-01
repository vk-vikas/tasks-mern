import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import "./Todos.css";
import { getAllTodos } from "../redux/thunks/TodoThunks";

const Todos = () => {
  const todoState = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  return (
    <ul className="todos">
      {todoState.map((todo) => (
        <Todo todo={todo} key={todo.title} />
      ))}
    </ul>
  );
};

export default Todos;
