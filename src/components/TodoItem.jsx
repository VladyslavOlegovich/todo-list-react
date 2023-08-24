import { Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { Edit } from "@material-ui/icons";
import React, { useState } from "react";
import {
  ListItem,
  List,
  ListItemText,
  Divider,
  Checkbox,
  TextField,
} from "@material-ui/core";

const TodoItem = ({ todo, deleteTodo, changeTodo, number }) => {
  const [checked, setChecked] = useState(false);
  const [editing, setEditing] = useState(false);
  const [description, setDescription] = useState(todo.description);
  const handleDelete = () => {
    deleteTodo(todo.id);
  };
  const handleTogle = () => {
    setChecked(!checked);
  };
  const handleEdit = () => {
    setEditing(true);
  };
  const handleSave = () => {
    setEditing(false);
    const editedTodo = {
      id: todo.id,
      description: description,
      completed: false,
    };
    changeTodo(todo.id, editedTodo);
  };
  const handleCancel = () => {
    setEditing(false);
    setDescription(todo.description);
  };
  const getListItemStyle = (checked) => {
    return {
      background: checked ? "#DCDCDC" : "white",
    };
  };

  return (
    <div className="todo-item">
      <List component="nav" aria-label="todo-list">
        <ListItem style={getListItemStyle(checked)} button>
          <Checkbox
            color="primary"
            checked={checked}
            onChange={handleTogle}
            id={`todo-${todo.id}`}
            inputProps={{ "aria-label": "select todo item" }}
          ></Checkbox>
          {editing ? (
            <>
              <TextField
                fullWidth
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></TextField>
              <Button vaiant="contained" onClick={handleSave}>
                Save
              </Button>
              <Button vaiant="contained" onClick={handleCancel}>
                Cancel
              </Button>
            </>
          ) : (
            <>
              <ListItemText primary={`${number}: ${todo.description}`} />
              <IconButton aria-label="edit" onClick={handleEdit}>
                <Edit />
              </IconButton>
              <IconButton aria-label="delete">
                <DeleteIcon onClick={handleDelete} />
              </IconButton>
            </>
          )}
        </ListItem>
        <Divider />
      </List>
    </div>
  );
};

export default TodoItem;
