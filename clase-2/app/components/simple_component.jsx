import React, { Component } from 'react';
import CounterLabel from './counter_label';
import CounterModifier from './counter_modifier';

export default class SimpleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleCounterIncrease() {
    this.setState({
      counter: ++this.state.counter
    });
  }

  handleCounterDecrease() {
    this.setState({
      counter: --this.state.counter
    });
  }

  render() {
    return(
      <div>
        <CounterLabel value={this.state.counter} />
        <CounterModifier
          onIncrease={this.handleCounterIncrease.bind(this)}
          onDecrease={this.handleCounterDecrease.bind(this)}
        />
      </div>
    );
  }
}
