// implement SearchBar component here
import React, { Component } from 'react';
import Input from './form/Input';

class SearchBar extends Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange,
    } = this.props;
    const input = ['Inclui o texto:', 'searchText', 'text', 'input', searchText, onSearchTextChange];
    return (
      <form>
        <Input key={input[1]} data={input} />
        <label htmlFor="bookmarkedOnly">
          Mostrar somente favoritos
          <input name="bookmarkedOnly" type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        </label>
        <label htmlFor="selectedGenre">
          Filtrar por gênero
          <select name="selectedGenre" value={selectedGenre} onChange={onSelectedGenreChange}>
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
