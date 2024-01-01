import React, { useState } from "react";
import "./TodoForm.css";
import { addNewTodo } from "../redux/slices/TodoSlice";
import { useDispatch } from "react-redux";

const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewTodo(text));
    setText("");
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};

export default TodoForm;
