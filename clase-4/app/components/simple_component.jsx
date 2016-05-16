import React, { Component } from 'react';

export default class SimpleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      controlledInputValue: ''
    };
  }

  handleSubmit() {
    console.log('---- VALORES ----');
    console.log(this.state.controlledInputValue);
    console.log(this._uncontrolledText.value);
    console.log('-----------------');
  }

  render() {
    return(
      <div>
        <input
          type='text'
          value={this.state.controlledInputValue}
          onChange={(evt) => this.setState({ controlledInputValue: evt.target.value })}/> <br />
        <input type='text' defaultValue='' ref={(el) => { this._uncontrolledText = el; } }/><br />
        <button onClick={this.handleSubmit.bind(this)}>Enviar!</button>
      </div>
    );
  }
}
