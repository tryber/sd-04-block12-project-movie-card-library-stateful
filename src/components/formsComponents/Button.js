import React from 'react';

class Button extends React.Component {
  render() {
    // tive que abreviar as props por causa do CC, legenda:
    // t = type; v = value; onC = onChange; l = label; s = limite superior; i = limite inferior
    const { type, onC, name } = this.props;
    return (
      <button onClick={onC}>
        {name}
      </button>
    );
  }
}

export default Button;
