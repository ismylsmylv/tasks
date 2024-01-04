"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { adder } from "@/redux/slices/counterSlice";
import { useSelector } from "react-redux";
export default function Todo() {
  const todos = useSelector((state) => state.counter.todos);
  console.log();
  const [todo, settodo] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        placeholder="Add todo"
        value={todo}
        onChange={(e) => {
          settodo(e.target.value);
        }}
      />
      <button
        onClick={() => {
          // console.log(todo);
          dispatch(adder(todo));
          settodo("");
        }}
      >
        Add
      </button>
      <ul>
        {todos &&
          todos.map((elem, i) => {
            return <li key={i}>{elem}</li>;
          })}
      </ul>
    </div>
  );
}
