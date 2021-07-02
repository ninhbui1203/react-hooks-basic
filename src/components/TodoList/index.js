import React, { useState } from "react";
import PropTypes from "prop-types";

TodoList.propTypes = {};

function TodoList(props) {
  const { todos } = props;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;
