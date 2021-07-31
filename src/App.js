import "./App.css";
import Header from "./mycomponents/Header";
import ToDos from "./mycomponents/ToDos";
import Footer from "./mycomponents/Footer";
import AddTodo from "./mycomponents/AddTodo";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("deleted", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    let newsno;
    if (todos.length == 0) {
      newsno = 1;
    } else {
      newsno = todos[todos.length - 1]["sno"] + 1;
    }
    const newtodo = {
      sno: newsno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, newtodo]);

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  let [todos, setTodos] = useState([initTodo]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
    <Router>
      <Header title="MyList" />
      <AddTodo addTodo={addTodo} />
      <ToDos todos={todos} onDelete={onDelete} />
      <Footer />
    </Router>
    </>
  );
}

export default App;
