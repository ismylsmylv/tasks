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
export default function Todo() {
  const todos = useSelector((state: any) => state.counter.todos);
  let todo = useSelector((state: any) => state.counter.todo);
  console.log();
  // const [todo, settodo] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
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
      <ul>
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
      </ul>
    </div>
  );
}
