import React, { useState } from "react";
import { Button, makeStyles } from "@material-ui/core";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  input: {
    fontSize: "44px",
  },
}));

const TodoForm = ({ addTodo }) => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      category: "category",
      description: inputValue,
      completed: false,
    };
    addTodo(newTodo);
    setInputValue("");
  };
  return (
    <form
      className="todo-form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        id="standard-basic"
        label="your task..."
        fullWidth
        type="text"
        style={{ fontSize: "50px" }}
        className={classes.input}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="form-button">
        <Button variant="contained" type="submit">
          Add Task
        </Button>
      </div>
    </form>
  );
};

export default TodoForm;
