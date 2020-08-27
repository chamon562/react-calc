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

  compute = ( ) =>{
    //   whatever user input in the number it will be addnum1 it was string and we changed to number with parseInt
      let number1 = parseInt(this.state.num1)
      let number2 = parseInt(this.state.num2)
      let math_it_up = {
        '+': function (x, y) { return x + y },
        '-': function (x, y) { return x - y },
        '*': function (x, y) { return x * y },
        '/': function (x, y) { return x / y }
      }
    //   these operators are the sign so calling all the vaues
    let equation = math_it_up[this.state.operator](number1, number2)
      console.log(this.state)
      this.setState({
        //   result messses up for addition on first try but when refresh works
          result: equation
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
          <select onChange={(e) => this.setState({operator: e.target.value})}>
          <option value='+'>+</option>
          <option value='-'>-</option>
          <option value='*'>*</option>
          <option value='/'>/</option>

          </select>
          <input
            type="number"
            name="num2"
            placeholder="Enter Second Number"
            value={this.state.num2}
            onChange={(e) => this.setNum(e, "num2")}
          />
          <button onClick={this.compute} >=</button>
          <h3>{this.state.result}</h3>
        </div>
      </div>
    );
  }
}

export default Calculator;
