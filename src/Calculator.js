import React, { Component } from "react";
import "./Button.css";


class Calculator extends Component {
  constructor(props) {
    super();
    this.state = {
      num1: "",
      num2: "",
    };
  }
  setNum = (e, num) => {
    //   the num inside is the key and the value of the key is e.target.value
    this.setState({ [num]: e.target.value});
  }

  addNum = ( ) =>{
      let addnum1 = parseInt(this.state.num1)
      let addnum2 = parseInt(this.state.num2)

      console.log(this.state)
      this.setState({
          result: addnum1 + addnum2
          
        })
  }

  render() {
    return (
      <div className="container">
        <h1>Add with React!</h1>
        <div className="add">
          <input
            type="number"
            name="num1"
            placeholder="Enter your first number"
            value={this.state.num1}
            onChange={(e) => this.setNum(e, "num1")}
          />
          <span>+</span>
          <input
            type="number"
            name="num2"
            placeholder="Enter Second Number"
            value={this.state.num2}
            onChange={(e) => this.setNum(e, "num2")}
          />
          <button onClick={this.addNum} >=</button>
          <h3>{this.state.result}</h3>
        </div>
      </div>
    );
  }
}

export default Calculator;
