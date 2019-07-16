import React, { Component } from "react";
import "./Todo.css";
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
            name="task"
            type="text"
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button className="form-btn">Update Todo</button>
        </form>
      );
    } else {
      display = (
        <>
          <div className="Todo-task-div">
            <p onClick={this.handleToggle} className={`Todo-task ${complete}`}>
              {this.props.task}
            </p>
          </div>
          <div className="Todo-task-btns">
            <button onClick={this.toggleEdit} className="btn">
              edit
            </button>
            <button onClick={this.handleRemove} className="btn">
              x
            </button>
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
