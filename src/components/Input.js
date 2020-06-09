import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <div>
        <label htmlFor={this.props.id}>{this.props.content}</label>
        <input
          type={this.props.text} id={this.props.id} name={this.props.id}
          value={this.props.value} onChange={this.props.onchange}
        />
      </div>
    );
  }
}

export default Input;
