import React, { Component } from "react";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    // clickFunction()
    this.props.removeTodo(this.props.id);
  }

  handleEdit() {
    this.props.editTodo(this.props.id);
  }

  render() {
    const { todo, id } = this.props;
    return (
      <div>
        <p key={id}>{todo}</p>
        <button onClick={this.handleEdit}>edit</button>
        <button onClick={this.handleRemove}>x</button>
      </div>
    );
  }
}
