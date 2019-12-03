/*import React from "react";

class Counter extends React.Component {
  state = { count: 0 };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.state.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}
export default Counter;*/

import React from "react";
import Counter from "./Counter";
import { createStore } from "redux";
import { Provider } from "react-redux";

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      };
    case "RESET":
      return {
        count: 0
      };
    case "MULTIPLICATION":
      return {
        count: state.count * 10
      };
    case "DIVISION":
      return {
        count: Math.round(state.count / 10)
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default App;
