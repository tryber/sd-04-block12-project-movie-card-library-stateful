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
      <div>
        <form>
          <label htmlFor="searchText">
            Inclui o texto:
            <input
              type="text"
              value={searchText}
              onChange={onSearchTextChange}
              id="searchText"
              name="searchText"
            />
          </label>
          <label htmlFor="bookmarkedOnly">
            Mostrar somente favoritos
            <input
              type="checkbox"
              checked={bookmarkedOnly}
              onChange={onBookmarkedChange}
              id="bookmarkedOnly"
              name="bookmarkedOnly"
            />
          </label>
          <label htmlFor="selectedGenre">
            Filtrar por gênero
            <select
              name="selectedGenre"
              id="selectedGenre"
              value={selectedGenre}
              onChange={onSelectedGenreChange}
            >
              <option value="">Todos</option>
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
