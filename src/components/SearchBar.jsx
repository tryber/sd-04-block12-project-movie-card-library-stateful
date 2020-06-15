import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { onSearchTextChange, searchText, bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <form>

        <label htmlFor="text">Inclui o texto:</label>
        <input name="text" type="text" onChange={onSearchTextChange} value={searchText} />
        <br />
        <label htmlFor="bookmarked">Mostrar somente favoritos</label>
        <input
          name="bookmarked"
          type="checkbox"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
        />
        <br />
        <label htmlFor="genre">Filtrar por gênero</label>
        <select value={this.props.selectedGenre} onChange={this.props.onSelectedGenreChange}>
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>

      </form>
    );
  }
}

export default SearchBar;
