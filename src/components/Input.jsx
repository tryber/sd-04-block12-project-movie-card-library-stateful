import React from 'react';

export default class Inputs extends React.Component {
  render() {
    const { type, label, value } = this.props;
    return (
      <div>
        <label htmlFor={value}>
          {label}<input type={type} onChange={this.changes} value={value} /></label>
      </div>
    )
  }
}