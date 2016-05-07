import React, { Component, PropTypes } from 'react';

export default class CounterLabel extends Component {
  static get propTypes() {
    return {
      value: PropTypes.number.isRequired
    }
  }

  render() {
    return(
      <h1>El valor del contador es: {this.props.value}</h1>
    );
  }
}
