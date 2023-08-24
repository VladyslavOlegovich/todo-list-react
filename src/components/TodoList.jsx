import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, changeTodo }) => {
  return (
    <div className="todo-list">
      {todos.map((todo, i) => (
        <TodoItem
          number={i + 1}
          todo={todo}
          deleteTodo={deleteTodo}
          changeTodo={changeTodo}
          key={todo.id}
        />
      ))}
    </div>
  );
};

export default TodoList;
