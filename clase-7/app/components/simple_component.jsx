import React, { Component, PropTypes } from 'react';

export default class SimpleComponent extends Component {
  static get propTypes() {
    return {
      numberList: PropTypes.arrayOf(PropTypes.shape({
        number: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired
      })).isRequired,
      total: PropTypes.number.isRequired,
      loading: PropTypes.bool.isRequired,
      onAddNumber: PropTypes.func.isRequired,
      onSubtractNumber: PropTypes.func.isRequired
    }
  }

  renderNumberList() {
    const list = this.props.numberList.map((element, index) => {
      if (element.type === 'ADD') {
        return (
          <li key={index}>{element.number}</li>
        );
      } else {
        return (
          <li key={index} style={{color: 'red'}}>({element.number})</li>
        );
      }
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

  handleSubtractNumber() {
    this.props.onSubtractNumber(this._text.value);
    this._text.value = '';
    this._text.focus();
  }

  render() {
    return(
      <div>
        <input type='text' ref={(el) => this._text = el} defaultValue='' disabled={this.props.loading}/><br />
        <button onClick={this.handleAddNumber.bind(this)} disabled={this.props.loading}>Sumar  número</button>&nbsp;
        <button onClick={this.handleSubtractNumber.bind(this)} disabled={this.props.loading}>Restar número</button>
        <h1>TOTAL: {this.props.total}</h1>
        {this.renderNumberList()}
      </div>
    );
  }
}
