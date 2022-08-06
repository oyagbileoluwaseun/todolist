import React from "react";
import todo from "./todol.png";

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#todo">
          <img
            src={todo}
            alt="Todo"
            width={60}
            height={38}
            className="d-inline-block align-text-top"
          />
          <span className="fw-bolder text-primary">ToDo-List</span>
        </a>
      </div>
    </nav>
  );
};

export default Header;
