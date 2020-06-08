import React from 'react';

function InputComp({ v, oC, lTx, n, t, pH, c }) {
  return (
    <label htmlFor={n}>
      {lTx}
      <input
        type={t}
        name={n}
        value={v}
        checked={c}
        placeholder={pH}
        onChange={oC}
      />
    </label>
  );
}

export default InputComp;
