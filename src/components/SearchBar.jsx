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
              name="searchText"
              value={searchText}
              onChange={onSearchTextChange}
            />
          </label>
          <br />
          <input
            type="checkbox"
            name="bookmarkedOnly"
            defaultChecked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
          <label>Mostrar somente favoritos</label>
          <br />
          <label>
            Filtrar por genero
            <select defaultValue={selectedGenre} name="selectedGenre" onChange={onSelectedGenreChange}>
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
