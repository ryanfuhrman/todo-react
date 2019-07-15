import React, { Component } from "react";

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

  render() {
    let display;

    if (this.state.edit) {
      display = (
        <form onSubmit={this.handleUpdate}>
          <label htmlFor="task" />
          <input
            name="task"
            type="text"
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button>Update Todo</button>
        </form>
      );
    } else {
      display = (
        <div>
          <p>{this.props.task}</p>
          <button onClick={this.toggleEdit}>edit</button>
          <button onClick={this.handleRemove}>x</button>
        </div>
      );
    }

    return <li>{display}</li>;
  }
}
