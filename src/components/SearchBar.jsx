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
      <fieldset>
        <form>
          <label htmlFor="searchtext">
            Inclui o texto:
            <input
              type="text"
              name="searchtext"
              value={searchText}
              onChange={onSearchTextChange}
            />
          </label>

          <label htmlFor="favmovies">
            Mostrar somente favoritos
            <input
              type="checkbox"
              name="favmovies"
              checked={bookmarkedOnly}
              onChange={onBookmarkedChange}
            />
          </label>

          <label htmlFor="genre">
            Filtrar por gênero
            <select
              name="genre"
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
      </fieldset>
    );
  }
}

export default SearchBar;
