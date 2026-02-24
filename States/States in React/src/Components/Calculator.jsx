import { Component } from "react";
import "../App.css";

class Calculator extends Component {
  state = { value: "" };

  onBtn = (event) => {
    this.setState({ value: this.state.value + event.target.textContent });
  };

  clearAllBtn = () => {
    this.setState({ value: "" });
  };

  delteBtn = () => {
    const { value } = this.state;
    this.setState({ value: value.slice(0, value.length - 1) });
  };

  matchBtn = () => {
    try {
      this.setState({ value: String(eval(this.state.value)) });
    } catch {
      this.setState({ value: "Error" });
    }
  };

  render() {
    return (
      <div className="calc-container">
        <div className="calc-display">
          {this.state.value}
        </div>

        <div className="calc-row">
          <button className="calc-btn ac-btn" onClick={this.clearAllBtn}>AC</button>
          <button className="calc-btn special" onClick={this.delteBtn}>DEL</button>
          <button className="calc-btn operator" onClick={this.onBtn}>%</button>
          <button className="calc-btn operator" onClick={this.onBtn}>/</button>
        </div>

        <div className="calc-row">
          <button className="calc-btn" onClick={this.onBtn}>7</button>
          <button className="calc-btn" onClick={this.onBtn}>8</button>
          <button className="calc-btn" onClick={this.onBtn}>9</button>
          <button className="calc-btn operator" onClick={this.onBtn}>*</button>
        </div>

        <div className="calc-row">
          <button className="calc-btn" onClick={this.onBtn}>4</button>
          <button className="calc-btn" onClick={this.onBtn}>5</button>
          <button className="calc-btn" onClick={this.onBtn}>6</button>
          <button className="calc-btn operator" onClick={this.onBtn}>-</button>
        </div>

        <div className="calc-row">
          <button className="calc-btn" onClick={this.onBtn}>1</button>
          <button className="calc-btn" onClick={this.onBtn}>2</button>
          <button className="calc-btn" onClick={this.onBtn}>3</button>
          <button className="calc-btn operator" onClick={this.onBtn}>+</button>
        </div>

        <div className="calc-row">
          <button className="calc-btn" onClick={this.onBtn}>00</button>
          <button className="calc-btn" onClick={this.onBtn}>0</button>
          <button className="calc-btn" onClick={this.onBtn}>.</button>
          <button className="calc-btn equal-btn" onClick={this.matchBtn}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;