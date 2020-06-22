import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    const {
      searchText, onSearchTextChange, onBookmarkedChange,
      bookmarkedOnly, selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <div>
        <form action="">
          <label htmlFor="includesText">Inclui o texto</label>
          <br />
          <input onChange={onSearchTextChange} type="text" name="includesText" value={searchText} />
          <br />
          <input onChange={onBookmarkedChange} type="checkbox" checked={bookmarkedOnly} />
          <label htmlFor="checkbox">Mostrar somente favoritos</label>
          <br />
          <label htmlFor="select">Filtrar por gênero</label>
          <select onChange={onSelectedGenreChange} name="select" id="" value={selectedGenre}>
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
