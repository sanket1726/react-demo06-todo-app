import React, { useState, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, ModalFooter } from "reactstrap";
import "./App.css";
import { TodoContext } from "./context/TodoContext";
import TodoReducer from "./context/reducer";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import MyPic from "./32248.jpg";

const App = () => {
  const [todos, dispatch] = useReducer(TodoReducer, []);
  return (
    <TodoContext.Provider
      value={{
        todos,
        dispatch,
      }}
    >
      <Container fluid>
        <img className="picture" src={MyPic} alt="smiling" />
        <hr className="my-line" />
        <h1> ToDo App with Context API </h1> <TodoForm />
        <Todos />
      </Container>{" "}
    </TodoContext.Provider>
  );
};

export default App;
