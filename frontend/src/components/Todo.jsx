import React, { useState } from "react";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import "./Todos.css";
import { useDispatch } from "react-redux";
import {
  toggleDoneTodo,
  updateTodo,
  deleteTodo,
} from "../redux/thunks/TodoThunks";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.title);

  const onFormSubmit = (e) => {
    e.preventDefault();
    setIsEditing((prev) => !prev);
    dispatch(updateTodo({ id: todo._id, text }));
    // needs to be send as an object cause createasyn fun can only take one passed parameter
    // as the second para is tunkAPI
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo._id));
  };

  return (
    <li className="todo">
      <span
        style={{ display: isEditing ? "none" : "" }}
        onClick={() => dispatch(toggleDoneTodo(todo._id))}
        className={`${todo.done ? "done" : ""}`}
      >
        {todo.title}
      </span>
      <form
        style={{ display: isEditing ? "inline" : "none" }}
        onSubmit={onFormSubmit}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="edit-input"
        />
      </form>
      <div>
        <span className="icon" onClick={() => setIsEditing((prev) => !prev)}>
          <MdEdit />
        </span>
        <span className="icon">
          <MdDeleteForever style={{ color: "red" }} onClick={handleDelete} />
        </span>
      </div>
    </li>
  );
};

export default Todo;
