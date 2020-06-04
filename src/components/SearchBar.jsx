import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText, onSearchTextChange,
      bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <form>
        <label htmlFor="searchText">Inclui o texto:</label><br/>
        <input 
          name="searchText"type="text" value={searchText} onChange={onSearchTextChange}
        /><br/>
        <input
          name="bookmarkedOnly" type="checkbox" defaultChecked={bookmarkedOnly} onChange={onBookmarkedChange}
        />
        <label htmlFor="bookmarkedOnly">Mostrar somente favoritos</label><br/>
        <label htmlFor="genre">Filtrar por gênero<br/>
          <select name="selectedGenre" defaultValue={selectedGenre} onChange={onSelectedGenreChange}>
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
