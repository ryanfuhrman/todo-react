import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm.js";
import Todo from "./Todo.js";
import "./TodoList.css";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  addTodo(newTodo) {
    this.setState(st => ({
      todos: [...st.todos, newTodo],
    }));
  }

  removeTodo(id) {
    this.setState(st => ({
      todos: st.todos.filter(todo => todo.id !== id),
    }));
  }

  updateTodo(id, updatedTask) {
    this.setState(st => ({
      todos: st.todos.map(todo => {
        return todo.id === id ? { ...todo, task: updatedTask } : todo;
      }),
    }));
  }

  render() {
    return (
      <div className="TodoList">
        <h1 className="TodoList-header">Todo List!</h1>
        <div className="TodoList-NewTodoForm">
          <NewTodoForm addTodo={this.addTodo} />
        </div>
        <ul className="TodoList-list">
          {this.state.todos.map(({ task, id }) => (
            <Todo
              task={task}
              key={id}
              id={id}
              removeTodo={this.removeTodo}
              updateTodo={this.updateTodo}
            />
          ))}
        </ul>
      </div>
    );
  }
}
