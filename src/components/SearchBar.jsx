import React from 'react';

class SearchBar extends React.Component {

  creatorSelector() {
    return (
      <label htmlFor="gender">
        Filtrar por gênero
        <select
          id="gender"
          value={this.props.selectedGenre}
          onChange={this.props.onSelectedGenreChange}
        >
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const {
      searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange,
    } = this.props;
    return (
      <form>
        <label htmlFor="filmName">Inclui o texto</label>
        <input
          type="text"
          id="filmName"
          value={searchText}
          onChange={onSearchTextChange}
        />
        <label htmlFor="fav">Mostrar somente favoritos</label>
        <input
          type="checkbox"
          id="fav"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
        />
        {this.creatorSelector()}
      </form>
    );
  }
}

export default SearchBar;
