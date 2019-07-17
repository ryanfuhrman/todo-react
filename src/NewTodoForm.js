import React, { Component } from "react";
import uuid from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NewTodoForm.css";

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
    this.props.addTodo({ ...this.state, id: uuid(), completed: false });
    this.setState({
      task: "",
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="NewTodoForm">
        <label htmlFor="todo" />
        <input
          className="NewTodoForm-input"
          id="todo"
          name="task"
          type="text"
          placeholder="New Task"
          onChange={this.handleChange}
          value={this.state.task}
        />
        <button className="NewTodoForm-btn">
          <FontAwesomeIcon icon="plus" />
        </button>
      </form>
    );
  }
}
