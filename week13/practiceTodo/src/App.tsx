import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import type { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { getInp, addInp } from "./slices/todoSlice";

function App() {
  const [count, setCount] = useState(0);
  const [inpValue, setinpValue] = useState("");
  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch();
  return (
    <>
      <input
        type="text"
        value={inpValue}
        onChange={(e) => {
          setinpValue(e.target.value);
          dispatch(getInp(inpValue));
        }}
      />
      <button
        onClick={() => {
          dispatch(addInp());
          setinpValue("");
        }}
      >
        Add
      </button>
      <ul>
        {todos &&
          todos.map((elem) => {
            return <li>{elem}</li>;
          })}
      </ul>
    </>
  );
}

export default App;
