import React from 'react';

function TextAreaComp({ v, oC, lTx, n, pH }) {
  return (
    <label htmlFor={n}>
      {lTx}
      <textarea name={n} placeholder={pH} onChange={oC} value={v} />
    </label>
  );
}

export default TextAreaComp;
