import React from 'react';

class Input extends React.Component {
  render() {
    // tive que abreviar as props por causa do CC, legenda:
    // t = type; v = value; onC = onChange; l = label; s = limite superior; i = limite inferior
    const { t, v, checked, onC, l, name, s, i } = this.props;
    return (
      <label htmlFor="something">
        {l}
        <input
          type={t}
          value={v}
          checked={checked}
          onChange={onC}
          name={name}
          max={s}
          min={i}
        />
      </label>
    );
  }
}

Input.defaultProps = { t: 'text' };

export default Input;
