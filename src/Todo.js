import React, { Component } from "react";
import "./Todo.css";
export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      task: this.props.task,
      completed: false,
    };

    this.handleRemove = this.handleRemove.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
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

  toggleComplete() {
    this.setState(st => ({
      completed: !st.completed,
    }));
  }

  render() {
    let display;
    let complete = "";

    if (this.state.completed) {
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
          <button className="btn">Update Todo</button>
        </form>
      );
    } else {
      display = (
        <div Todo-div>
          <p onClick={this.toggleComplete} className={`Todo-task ${complete}`}>
            {this.props.task}
          </p>
          <button onClick={this.toggleEdit} className="btn">
            edit
          </button>
          <button onClick={this.handleRemove} className="btn">
            x
          </button>
        </div>
      );
    }

    return <li className="Todo">{display}</li>;
  }
}
