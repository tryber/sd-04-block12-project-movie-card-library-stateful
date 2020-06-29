import React from 'react';

class SearchBar extends React.Component {
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
        <label>
          Inclui o texto:
          <input
            type="text"
            value={searchText}
            onChange={onSearchTextChange}
          ></input>
        </label>
        <label>
          Mostrar somente favoritos:
          <input
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          ></input>
        </label>
        <label>
          Filtrar por gênero:
          <select
            value={selectedGenre}
            checked={bookmarkedOnly}
            onChange={onSelectedGenreChange}
          >
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}
/* A propriedade value do select deve receber o valor da prop selectedGenre;

A propriedade onChange do input deve receber o valor da prop onSelectedGenreChange;

O select deve renderizar quatro tags option, com as opções de filtragem por gênero, na seguinte ordem:

Todos, com o valor "";
Ação, com o valor action;
Comédia, com o valor comedy;
Suspense, com o valor thriller. */

export default SearchBar;

/* searchText, uma string
onSearchTextChange, uma callback
bookmarkedOnly, um boolean
onBookmarkedChange, uma callback
selectedGenre, uma string
onSelectedGenreChange, uma callback */