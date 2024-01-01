import React from "react";
import TodoForm from "./TodoForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>Tasks</h1>
      <TodoForm />
    </div>
  );
};

export default Header;
