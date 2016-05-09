import React, { Component } from 'react';
import CounterLabel from './counter_label';
import CounterModifier from './counter_modifier';

export default class SimpleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  handleCounterIncrease() {
    this.setState({
      value: ++this.state.value
    });
  }

  handleCounterDecrease() {
    this.setState({
      value: --this.state.value
    });
  }

  render() {
    return(
      <div>
        <CounterLabel value={this.state.value} />
        <CounterModifier
          onIncrease={this.handleCounterIncrease.bind(this)}
          onDecrease={this.handleCounterDecrease.bind(this)}
        />
      </div>
    );
  }
}
