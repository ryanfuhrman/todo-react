import React, { Component } from "react";
import uuid from "uuid";

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      id: uuid(),
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      todo: "",
      id: uuid(),
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="todo" />
        <input
          id="todo"
          name="todo"
          type="text"
          onChange={this.handleChange}
          value={this.state.todo}
        />
        <button>Add To List</button>
      </form>
    );
  }
}
