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
          <label>
            Inclui o texto:
            <input
              type="text"
              name="searchText"
              value={searchText}
              onChange={onSearchTextChange}
            />
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="bookmarkedOnly"
              checked={bookmarkedOnly}
              onChange={onBookmarkedChange}
            />
            Mostrar somente favoritos
          </label>
          <br />
          <label>
            Filtrar por genero:
            <select
              name="selectGenre"
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
