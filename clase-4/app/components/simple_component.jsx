import React, { Component } from 'react';

export default class SimpleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      controlledInputValue: '',
      controlledSelect: '-1',
      radioValue: 'radio 1'
    };
  }

  handleSubmit() {
    console.log('---- VALORES ----');
    console.log(this.state.controlledInputValue);
    console.log(this._uncontrolledText.value);
    console.log(this.state.controlledSelect)
    console.log(this.state.radioValue);
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
        <select value={this.state.controlledSelect} onChange={(evt) => this.setState({ controlledSelect: evt.target.value })}>
          <option value='-1'>Sin valor</option>
          <option value='1'>Primer valor</option>
          <option value='2'>Segundo valor</option>
          <option value='3'>Terecer valor</option>
        </select><br />
        <input
         type='radio'
         name='radio 1'
         checked={this.state.radioValue === 'radio 1'}
         onChange={() => this.setState({radioValue: 'radio 1'})}
        />Radio 1&nbsp;
        <input
          type='radio'
          name='radio 2'
          checked={this.state.radioValue === 'radio 2'}
          onChange={() => this.setState({radioValue: 'radio 2'})}
        />Radio 2<br />
        <button onClick={this.handleSubmit.bind(this)}>Enviar!</button>
      </div>
    );
  }
}
