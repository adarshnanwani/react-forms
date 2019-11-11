import React, { Component } from "react";
import ShoppingListForm from "./ShoppingListForm";
import uuid from "uuid/v4";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { name: "1", quantity: "sfd", id: uuid() },
        { name: "2", quantity: "ytu", id: uuid() }
      ]
    };
    this.renderItems = this.renderItems.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  renderItems() {
    return this.state.list.map(item => (
      <li key={item.id}>
        {item.name}:{item.quantity}
      </li>
    ));
  }

  addItem(item) {
    let newItem = { ...item, id: uuid() };
    this.setState(state => {
      return {
        list: [...state.list, newItem]
      };
    });
  }

  render() {
    return (
      <div>
        <h2>Shopping List</h2>
        <ul>{this.renderItems()}</ul>
        <ShoppingListForm addItem={this.addItem} />
      </div>
    );
  }
}

export default ShoppingList;
