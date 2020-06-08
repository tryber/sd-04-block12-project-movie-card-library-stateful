import React from 'react';

function SelectComp({ v, oC, lTx, n }) {
  return (
    <label htmlFor={n}>
      {lTx}
      <select name={n} value={v} onChange={oC}>
        <option value="">Todos</option>
        <option value="action">Ação</option>
        <option value="comedy">Comédia</option>
        <option value="thriller">Suspense</option>
      </select>
    </label>
  );
}

export default SelectComp;
