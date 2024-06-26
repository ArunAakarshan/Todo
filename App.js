import React, { useState } from "react";
import TodoForm from "./ToDoForm";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  const toggleComplete   = (id) =>{
    setTodos(
      todos.map(todo=>
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    );
  };
  const removeTodo = (id) =>{
    setTodos(todos.filter(todo=> todo.id !== id));
  };
  return (
    <div className="App">
      <h1>To Do Lists</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList  todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo}/>
    </div>
  );
}
export default App;
