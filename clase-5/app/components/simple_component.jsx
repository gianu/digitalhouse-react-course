import React, { Component, PropTypes } from 'react';

export default class SimpleComponent extends Component {
  static get propTypes() {
    return {
      currentCounterValue: PropTypes.number.isRequired,
      onIncrement: PropTypes.func.isRequired,
      onDecrement: PropTypes.func.isRequired
    };
  }

  render() {
    return(
      <div>
        <h1> El valor del contador es: {this.props.currentCounterValue}</h1>
        <button onClick={this.props.onIncrement}>Incrementar</button>
        <button onClick={this.props.onDecrement}>Decrementar</button>
      </div>
    );
  }
}
