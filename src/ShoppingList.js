import React, { Component } from "react";
import ShoppingListForm from "./ShoppingListForm";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{ name: "1", quantity: "sfd" }, { name: "2", quantity: "ytu" }]
    };
    this.renderItems = this.renderItems.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  renderItems() {
    return this.state.list.map(item => (
      <li>
        {item.name}:{item.quantity}
      </li>
    ));
  }

  addItem(item) {
    this.setState(state => {
      return {
        list: [...state.list, item]
      };
    });
  }

  render() {
    return (
      <div>
        <h2>Shopping List</h2>
        <ul>{this.renderItems()}</ul>
        <ShoppingListForm addItem={this.addItem}/>
      </div>
    );
  }
}

export default ShoppingList;
