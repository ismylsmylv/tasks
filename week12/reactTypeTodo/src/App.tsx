import { Dispatch } from "@reduxjs/toolkit";
import "./App.css";
import { addTodo } from "./redux/slice/todoSlice";
import { useSelector, useDispatch } from "react-redux";
import { SetStateAction } from "react";
function App() {
  const addTodo = useSelector((state) => state.todo.addTodo);
  const dispatch = useDispatch();

  interface Props {
    todo: Todo;
    todos: Todo[];
    addTodo: Dispatch<SetStateAction>;
  }
  return (
    <>
      <button
        onClick={() => {
          dispatch(addTodo());
        }}
      >
        click
      </button>
    </>
  );
}

export default App;
