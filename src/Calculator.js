import React, { Component } from "react";
import "./Button.css";

class Calculator extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1>Add with React!</h1>

          <div className="add">
            <input type="text" />
            <span>+</span>
            <input type="text" />
            <button>=</button>
            <h3>Addition results go here!</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
