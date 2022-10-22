import "./App.css";
import React, { useState } from "react";

function ToDOInput() {
  const [value, setValue] = useState("");
  const [todos, SetTodo] = useState([]);
  return (
    <>
      <label>
        Add Your ToDo
        <input
          type="text"
          value={value}
          onChange={(event) => {
            const {
              target: { value },
            } = event;
            setValue(value);
          }}
        />
      </label>
      <div>
        <button
          onClick={() => {
            SetTodo([...todos, { todo: value }]);
            setValue("");
          }}
        >
          Add toDO
        </button>
      </div>
    </>
  );
}
function DisplayTodo({ todos = [] }) {
  return (
    <>
      <h1>All Todo's</h1>
      {todos.map((el) => {
        return <h3>{el.todo}</h3>;
      })}
    </>
  );
}
function App() {
  const [value, setValue] = useState("");
  const [todos, SetTodo] = useState([]);
  return (
    <div class="App">
      <label>
        Add Your ToDo
        <input
          type="text"
          value={value}
          onChange={(event) => {
            const {
              target: { value },
            } = event;
            setValue(value);
          }}
        />
      </label>
      <div>
        <button
          onClick={() => {
            SetTodo([...todos, { todo: value, isCompleted: false }]);
            setValue("");
          }}
        >
          Add toDO
        </button>
      </div>

      <h1>All Todo's</h1>
      {todos.map((el) => {
        const { isCompleted, todo } = el;
        return (
          <>
            <p style={{ color: isCompleted ? "green" : "red" }}>{el.todo}</p>
            <button
              onClick={() => {
                const newTodosList = todos.map((el) => {
                  if (el.todo === todo) {
                    return { ...el, isCompleted: true };
                  }
                  return el;
                });
                SetTodo(newTodosList);
              }}
            >
              Done?
            </button>
          </>
        );
      })}
    </div>
  );
}

export default App;
