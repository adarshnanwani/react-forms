import React from "react";
import Form from "./Form";
import MulitpleForm from "./MultipleForm";
import ShoppingList from "./ShoppingList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Form />
      <MulitpleForm />
      <ShoppingList />
    </div>
  );
}

export default App;
