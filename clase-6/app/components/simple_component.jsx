import React, { Component, PropTypes } from 'react';

export default class SimpleComponent extends Component {
  static get propTypes() {
    return {
      numberList: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
      total: PropTypes.number.isRequired,
      onAddNumber: PropTypes.func.isRequired
    }
  }

  renderNumberList() {
    const list = this.props.numberList.map((number, index) => {
      return (
        <li key={index}>{number}</li>
      );
    });

    return (
      <ul>
        {list}
      </ul>
    )
  }

  handleAddNumber() {
    this.props.onAddNumber(this._text.value);
    this._text.value = '';
    this._text.focus();
  }

  render() {
    return(
      <div>
        <input type='text' ref={(el) => this._text = el} defaultValue='' /><br />
        <button onClick={this.handleAddNumber.bind(this)}>Agregar número</button>
        <h1>TOTAL: {this.props.total}</h1>
        {this.renderNumberList()}
      </div>
    );
  }
}
