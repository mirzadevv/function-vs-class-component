import { Component } from "react";
class CounterClass extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div>
        <p>This is a Counter Class {this.state.count}</p>
      </div>
    );
  }
}

export default CounterClass;
