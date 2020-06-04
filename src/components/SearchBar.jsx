import React from 'react';

export default class SearchBar extends React.Component {
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
              name="text"
              value={searchText}
              onChange={onSearchTextChange}
            />
          </label>
          <br />
          <input
            type="checkbox"
            name="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
          <label>Mostrar somente favoritos</label>
          <br />
          <label>
            Filtrar por genero
            <select value={selectedGenre} onChange={onSelectedGenreChange}>
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
