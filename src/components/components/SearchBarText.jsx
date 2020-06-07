import React from 'react';

const SearchText = ({ searchText, onSearchTextChange }) => (
  // recebe dois parametros, o texto digitado pelo usuário e a função
  // função que seta informação no state //   // recebe do antecessor
  <div>
    <label htmlFor="searchText" />
    Inclui o texto:
    <input
      type="text"
      name="searchText"
      value={searchText} // não precisa usar o this. state
      // porque já recebe como parametro do antecessor
      // recebendo do antecessor this.onSearchTextChange
      onChange={onSearchTextChange}
    />
  </div>
);

export default SearchText;
