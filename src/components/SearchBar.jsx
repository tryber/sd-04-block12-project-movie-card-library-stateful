// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {

  render() {
    const {
        searchText, bookmarkedOnly: book, selectedGenre,
        onSearchTextChange, onBookmarkedChange: marked, onSelectedGenreChange,
    } = this.props;
    return (
      <form>
        <label htmlFor="searchText">
          Inclui o texto:
          <input value={searchText} name="searchText" onChange={onSearchTextChange} type="text" />
        </label>
        <label htmlFor="bookmarkedOnly">
          Mostrar somente favoritos:
          <input checked={book} name="bookmarkedOnly" onChange={marked} type="checkbox" />
        </label>
        <label htmlFor="selectedGenre">
          Filtrar por gênero:
          <select value={selectedGenre} name="selectedGenre" onChange={onSelectedGenreChange}>
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

export default SearchBar;
