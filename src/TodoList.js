import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm.js";
import Todo from "./Todo.js";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
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

  render() {
    return (
      <div>
        <NewTodoForm addTodo={this.addTodo} />
        <div>
          {this.state.todos.map(({ todo, id }) => (
            <Todo todo={todo} key={id} id={id} removeTodo={this.removeTodo} />
          ))}
        </div>
      </div>
    );
  }
}
