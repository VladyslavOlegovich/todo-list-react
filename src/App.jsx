import { useState } from "react";

import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { Container } from "@material-ui/core";
import Header from "./components/Header";
function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  const changeTodo = (id, changedTodo) => {
    setTodos((prevTodos) => {
      const todoIndex = prevTodos.findIndex((todo) => todo.id === id);
      if (todoIndex === -1) {
        return prevTodos;
      }
      const updatedTodos = [...prevTodos];
      updatedTodos[todoIndex] = changedTodo;
      return updatedTodos;
    });
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <Header></Header>
      <Container>
        <TodoForm addTodo={addTodo} />
        {todos.length === 0 ? (
          <p className="message">plan your first task</p>
        ) : (
          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            changeTodo={changeTodo}
          />
        )}
      </Container>
    </>
  );
}

export default App;
