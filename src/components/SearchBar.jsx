// implement SearchBar component here
import React, { Component } from 'react';

const incluir = (a, b) => (
  <label htmlFor="Inclui o texto">
    Inclui o texto
    <input type="text" value={a} onChange={b} />
  </label>
);

const mostrar = (a, b) => (
  <label htmlFor="Mostrar somente favoritos">
    Mostrar somente favoritos
    <input type="checkbox" checked={a} onChange={b} />
  </label>
);

const filtrar = (a, b) => (
  <label htmlFor="Filtrar por gênero">
    Filtrar por gênero
    <select value={a} onChange={b}>
      <option value="">Todos</option>
      <option value="action">Ação</option>
      <option value="comedy">Comédia</option>
      <option value="thriller">Suspense</option>
    </select>
  </label>
);

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form>
        {incluir(searchText, onSearchTextChange)}
        {mostrar(bookmarkedOnly, onBookmarkedChange)}
        {filtrar(selectedGenre, onSelectedGenreChange)}
      </form>
    );
  }
}

export default SearchBar;
