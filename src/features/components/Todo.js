import React, { useEffect, useReducer, useState } from "react";
import TodoList from "./TodoList";
import "./Todo.css";

const reducer = (todos, action) => {
  switch (action.type) {
    case "populate_Todo":
      todos = action.payload.value;
      return todos;
    case "add_Todo":
      todos = [...todos, newTodo(action.payload.inputValue)];
      localStorage.setItem("todos", JSON.stringify(todos));
      return todos;
    case "mark_Todo":
      const setState = todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(setState));
      return setState;

    case "Delete_Todo":
      todos = todos.filter((todo) => todo.id !== action.payload.id);
      localStorage.setItem("todos", JSON.stringify(todos));
      return todos;
    case "Edit_Todo":
      const editState = todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, inputValue: action.payload.value };
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(editState));
      return editState;
    default:
      return todos;
  }
};

const newTodo = (value) => {
  return { id: Date.now(), inputValue: value, completed: false };
};

const Todo = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "add_Todo", payload: { inputValue: inputValue } });
    setInputValue("");
  };

  useEffect(() => {
    var existingEntries = JSON.parse(localStorage.getItem("todos")) || [];
    existingEntries &&
      dispatch({ type: "populate_Todo", payload: { value: existingEntries } });
  }, []);

  return (
    <section className="container" id="todo">
      {/* <hr /> */}
      <h1 className="fw-bold">My Todo App</h1>
      <form
        id="my-form"
        className="d-flex justify-content-around"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Type your Todo"
          value={inputValue}
          required
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input type="submit" className="btn btn-primary" value="Add Todo" />
      </form>
      <ul className="items" style={{ paddingLeft: "0" }}>
        {todos.map((todo) => (
          <TodoList key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </ul>
    </section>
  );
};

export default Todo;
