import React from 'react';

function InputText({ searchText, onSearchTextChange }) {
  return (
    <label htmlFor="Search">
      Inclui o texto
      <input
        type="text"
        name="Search"
        value={searchText}
        placeholder="Insert your search"
        onChange={onSearchTextChange}
      />
    </label>
  );
}

export default InputText;
