import React from 'react';

class Input extends React.Component {
  render() {
    return (
      <input
        type={this.props.type}
        checked={this.props.checked}
        onChange={this.props.onChange}
      />
    );
  }
}

export default Input;
