import React, { useState } from "react";
import "./TodoItem.css";

function Todo(props) {
  const { content, removeTodo, id } = props;
  const [isTodo, setIsTodo] = useState(false);
  const handleId = () => setIsTodo((isTodo) => !isTodo);
  return (
    <div
      key={id}
     className="todo-items"
    >
      <div
        onClick={() => handleId()}
        style={{
          textDecoration: isTodo ? `line-through` : `none`,
        }}
      >
        {content}
      </div>
      <div>
        <button
          type="button"
          onClick={() => removeTodo(id)}
          className="btn btn-danger"
        >
          Sil
        </button>
      </div>
    </div>
  );
}

export default Todo;
