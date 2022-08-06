import React from "react";

const TodoList = ({ todo, dispatch }) => {
  // const [editValue, setEditValue] = useState('');
  const markCompleted = () =>
    dispatch({ type: "mark_Todo", payload: { id: todo.id } });
  const deleteTodo = () =>
    dispatch({ type: "Delete_Todo", payload: { id: todo.id } });
  const editTodo = () => {
    const response = window.prompt("Input new text");
    dispatch({ type: "Edit_Todo", payload: { id: todo.id, value: response } });
  };

  return (
    <div className="">
      <li className="d-flex justify-content-between">
        <h5
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.inputValue}
        </h5>
        <div className="d-grid gap-2 d-md-block">
          <button
            className="btn btn-sm text-light"
            onClick={markCompleted}
            style={{
              backgroundColor: todo.completed ? "#1a995e" : "#dc3545",
            }}
          >
            {todo.completed ? "completed ✓" : "not completed ✘"}
          </button>

          <button className="btn btn-sm btn-primary" onClick={editTodo}>
            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>{" "}
            <span className="text-light">Edit</span>
          </button>

          <button className="btn btn-sm btn-danger" onClick={deleteTodo}>
            <i className="fa fa-trash" aria-hidden="true"></i>{" "}
            <span className="text-light ">Delete</span>
          </button>
        </div>
      </li>
    </div>
  );
};

export default TodoList;
