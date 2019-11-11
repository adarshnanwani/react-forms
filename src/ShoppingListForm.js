import React, { Component } from "react";

class ShoppingListForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", quantity: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addItem(this.state);
    this.setState({ name: "", quantity: "" });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          id="name"
          onChange={this.handleChange}
        />

        <label htmlFor="quantity">Quantity:</label>
        <input
          type="text"
          name="quantity"
          value={this.state.quantity}
          id="quantity"
          onChange={this.handleChange}
        />
        <button>Submit!</button>
      </form>
    );
  }
}

export default ShoppingListForm;
