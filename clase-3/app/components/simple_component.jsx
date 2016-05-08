import React, { Component } from 'react';

export default class SimpleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: true
    };
  }

  renderText() {
    if(this.state.showText) {
      return (<p>Texto que aparece y desaparece</p>);
    } else {
      return null;
    }
  }

  handleToggleText() {
    this.setState({
      showText: !this.state.showText
    });
  }
  
  render() {
    return(
      <div>
        {this.renderText()}
        <button onClick={this.handleToggleText.bind(this)}>Toggle Text</button>
      </div>
    );
  }
}
