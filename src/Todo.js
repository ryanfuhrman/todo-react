import React, { Component } from "react";
import "./Todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      task: this.props.task,
    };

    this.handleRemove = this.handleRemove.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleRemove() {
    this.props.removeTodo(this.props.id);
  }

  toggleEdit(todo, id) {
    this.setState({ edit: true });
  }

  handleUpdate(e) {
    e.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({ edit: false });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleToggle() {
    this.props.toggleCompleted(this.props.id);
  }

  render() {
    let display;
    let complete = "";

    if (this.props.completed) {
      complete = " Todo-completed";
    }

    if (this.state.edit) {
      display = (
        <form onSubmit={this.handleUpdate} className="Todo-form">
          <label htmlFor="task" />
          <input
            className="Todo-form-input"
            name="task"
            type="text"
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button className="Todo-form-btn">Update</button>
        </form>
      );
    } else {
      display = (
        <>
          <div
            onClick={this.handleToggle}
            className={`Todo-task-div ${complete}`}
          >
            {!this.props.completed ? (
              <FontAwesomeIcon icon="square" />
            ) : (
              <FontAwesomeIcon icon="check-square" />
            )}
            <p className="Todo-task">{this.props.task}</p>
          </div>
          <div className="Todo-task-btns">
            <div onClick={this.toggleEdit} className="btn">
              <FontAwesomeIcon icon="edit" />
            </div>
            <div onClick={this.handleRemove} className="btn">
              <FontAwesomeIcon icon="trash-alt" />
            </div>
          </div>
        </>
      );
    }

    return (
      <li className="Todo">
        <div className="Todo-div">{display}</div>
      </li>
    );
  }
}
