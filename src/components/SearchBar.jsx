import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange
    } = this.props;
    return (
      <div>
        <form>
          <label>Inclui o texto:</label>
          <input type="text" value={searchText} onChange={onSearchTextChange} />
          <label>Mostrar somente favoritos</label>
          <input type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
          <label>Filtrar por gênero</label>
          <select value={selectedGenre} onChange={onSelectedGenreChange}>
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </form>
      </div>
    );
  }
}

export default SearchBar;
