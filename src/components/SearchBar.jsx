import React from 'react';

class SearchBar extends React.Component {

  createSelect() {
    return (
      <label htmlFor="genre">
        Filtrar por gênero<br />
        <select
          name="selectedGenre"
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
        <label htmlFor="searchText">Inclui o texto:</label><br />
        <input
          name="searchText"type="text" value={searchText} onChange={onSearchTextChange}
        /><br />
        <label htmlFor="bookmarkedOnly">
          Mostrar somente favoritos
          <input
            name="bookmarkedOnly"
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
        </label><br />        
        {this.createSelect()}        
      </form>
    );
  }
}

export default SearchBar;
