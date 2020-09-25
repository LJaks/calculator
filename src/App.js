import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      input: ""
    }
    this.sum = this.sum.bind(this)
    this.reset = this.reset.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  reset(){
    this.setState({
        count: 0
      })
  }
  sum() {
    this.setState(prevState => {
      return {
        count: Math.floor(prevState.count + this.state.input)
      }
    })
  }
  handleChange(event) {
    this.setState({
          input: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.count}</h1>
        <input value={this.state.input} onChange={this.handleChange}></input>
        <button onClick={this.sum}>Sum!</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default App;
