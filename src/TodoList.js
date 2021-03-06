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
    this.toggleCompleted = this.toggleCompleted.bind(this);
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

  toggleCompleted(id) {
    this.setState(st => ({
      todos: st.todos.map(todo => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      }),
    }));
  }

  render() {
    return (
      <div className="TodoList">
        <h1 className="TodoList-header">To-do List</h1>
        <div className="TodoList-NewTodoForm">
          <NewTodoForm addTodo={this.addTodo} />
        </div>
        <ul className="TodoList-list">
          {this.state.todos.map(({ task, id, completed }) => (
            <Todo
              task={task}
              key={id}
              id={id}
              completed={completed}
              removeTodo={this.removeTodo}
              updateTodo={this.updateTodo}
              toggleCompleted={this.toggleCompleted}
            />
          ))}
        </ul>
      </div>
    );
  }
}
