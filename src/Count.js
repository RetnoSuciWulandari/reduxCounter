import React from "react";
import { connect } from "react-redux";

class Count extends React.Component {
  render() {
    return <span>{this.props.count}</span>;
  }
}

function displayCount(state) {
  return {
    count: state.count
  };
}

export default connect(displayCount)(Count);
