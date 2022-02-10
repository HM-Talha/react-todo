import React from "react";

const TodoList = ({ todos, handleDelete, handleEdit }) => {
  return (
    <ul className="allTodos">
      {todos.map((t) => (
        <li className="listTodo" key={t.id}>
          <span className="todoText" >
            {t.todo}
          </span>

          
          <button className="btn" onClick={() => handleEdit(t.id)}>Edit</button>
          <button className="btn" onClick={() => handleDelete(t.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;




