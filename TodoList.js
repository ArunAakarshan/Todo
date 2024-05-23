import React from "react";
import Todo from "./Todo.js";

const TodoList = ({ todos, toggleComplete, removeTodo }) => {
  return (
    <div className="todolist">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};
export default TodoList;
