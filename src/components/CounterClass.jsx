import { Component } from "react";
class CounterClass extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>This is a Counter Class {this.state.count}</p>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default CounterClass;
