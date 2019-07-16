import React from "react";
import TodoList from "./TodoList";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrash,
  faTrashAlt,
  faEdit,
  faSquare,
  faCheckSquare,
} from "@fortawesome/free-solid-svg-icons";
// import { faTrashAlt, faEdit } from "@fortawesome/fontawesome-free";

library.add(faTrash, faTrashAlt, faEdit, faSquare, faCheckSquare);

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
