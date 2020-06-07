import React from 'react';

const SelectedGenre = ({ selectedGenre, onSelectedGenreChange }) => (
  <div>
    <label htmlFor="selectedGenre" />
    Filtrar por gênero
    <select
      name="selectedGenre"
      value={selectedGenre}
      onChange={onSelectedGenreChange}
    >
      <option key="Todos" value="">
        Todos
      </option>
      <option key="Ação" value="action">
        Ação
      </option>
      <option key="Comédia" value="comedy">
        Comédia
      </option>
      <option key="Suspense" value="thriller">
        Suspense
      </option>
    </select>
  </div>
);

export default SelectedGenre;