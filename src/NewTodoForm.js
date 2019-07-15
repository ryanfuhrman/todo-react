import React, { Component } from "react";
import uuid from "uuid";

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
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
    this.props.addTodo({ ...this.state, id: uuid() });
    this.setState({
      task: "",
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="todo" />
        <input
          id="todo"
          name="task"
          type="text"
          placeholder="New Todo"
          onChange={this.handleChange}
          value={this.state.task}
        />
        <button>Add To List</button>
      </form>
    );
  }
}
