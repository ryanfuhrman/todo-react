import React from "react";
import TodoList from "./TodoList";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrashAlt,
  faEdit,
  faSquare,
  faCheckSquare,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
// import { faTrashAlt, faEdit } from "@fortawesome/fontawesome-free";

library.add(faTrashAlt, faEdit, faSquare, faCheckSquare, faPlus);

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
