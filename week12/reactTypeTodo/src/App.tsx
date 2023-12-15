import { RootState } from "@reduxjs/toolkit/query";
import { Dispatch, SetStateAction, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Todo, addTodo, getTodo, deleteTodo } from "./redux/slice/todoSlice";
interface Props {
  todo: Todo;
  todos: Todo[];
  addTodo: Dispatch<SetStateAction<Todo>>;
  getTodo: Dispatch<SetStateAction<Todo[]>>;
}
function App() {
  // const addTodo = useSelector((state) => state.todo.addTodo);
  const dispatch = useDispatch();
  const todo = useSelector((state: RootState) => state.todo.todo);
  const todos = useSelector((state: RootState) => state.todo.todos);
  const [input, setinput] = useState("");
  return (
    <>
      <div className="input" style={{ display: "flex", flexDirection: "row" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            dispatch(getTodo(e.target.value));
            setinput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(addTodo(todo));
            setinput("");
          }}
        >
          click
        </button>
      </div>

      <div className="listing">
        <ul>
          {todos.map((elem: Todo) => {
            return (
              <li key={elem.id}>
                {elem.title}{" "}
                <button
                  onClick={() => {
                    dispatch(deleteTodo(elem.id));
                  }}
                >
                  delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
