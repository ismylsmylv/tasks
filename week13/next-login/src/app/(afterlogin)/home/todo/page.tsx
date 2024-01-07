"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  adder,
  getter,
  empty,
  deleter,
  editer,
} from "@/redux/slices/counterSlice";
import { useSelector } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import "./style.css";
export default function Todo() {
  const todos = useSelector((state: any) => state.counter.todos);
  let todo = useSelector((state: any) => state.counter.todo);
  console.log();
  // const [todo, settodo] = useState("");
  const dispatch = useDispatch();
  const [checked, setChecked] = React.useState([0]);

  return (
    <div className="todoCard">
      <div className="inpField">
        <input
          type="text"
          placeholder="Add todo"
          value={todo}
          onChange={(e) => {
            dispatch(getter(e.target.value));
            // settodo(e.target.value);
          }}
        />
        <button
          onClick={() => {
            // console.log(todo);
            dispatch(adder(todo));
            // settodo("");
            dispatch(empty());
          }}
        >
          Add
        </button>
      </div>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {todos &&
          todos.map((elem: any) => {
            return (
              <ListItem
                key={uuidv4()}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="comments"
                    onClick={() => {
                      let editTodo = prompt("Edit todo");
                      dispatch(editer([elem, editTodo]));
                    }}
                  >
                    <CommentIcon />
                  </IconButton>
                }
                disablePadding
              >
                <ListItemButton
                  role={undefined}
                  onClick={() => {
                    dispatch(deleter(elem));
                  }}
                  dense
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      // checked={checked.indexOf(value) !== -1}
                      tabIndex={-1}
                      disableRipple
                      // inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={uuidv4()} primary={elem} />
                </ListItemButton>
              </ListItem>
            );
          })}
      </List>
      {/* <ul>
        {todos &&
          todos.map((elem: any) => {
            return (
              <li key={uuidv4()}>
                {elem}{" "}
                <button
                  onClick={() => {
                    dispatch(deleter(elem));
                  }}
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    let editTodo = prompt("Edit todo");
                    dispatch(editer([elem, editTodo]));
                  }}
                >
                  Edit
                </button>
              </li>
            );
          })}
      </ul> */}
    </div>
  );
}
