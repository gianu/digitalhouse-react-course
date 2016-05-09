import React, { Component, PropTypes } from 'react';

export default class CounterModifier extends Component {
  static get propTypes() {
    return {
      onIncrease: PropTypes.func.isRequired,
      onDecrease: PropTypes.func.isRequired
    };
  }

  render() {
    return(
      <div>
        <button onClick={this.props.onIncrease}>incrementar valor</button>
        <button onClick={this.props.onDecrease}>decrementar valor</button>
      </div>
    );
  }
}
