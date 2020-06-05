// implement SearchBar component here
import React, { Component } from 'react';
import Input from './form/Input';

class SearchBar extends Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange,
    } = this.props;
    const allInputs = [
      ['Inclui o texto:', 'text', 'text', 'input', searchText, onSearchTextChange],
      ['Mostrar somente favoritos', 'book', 'checkbox', 'input', bookmarkedOnly, onBookmarkedChange],
    ];
    return (
      <form>
        <Input key={allInputs[0][1]} data={allInputs[0]} />
        <Input key={allInputs[1][1]} data={allInputs[1]} />
        <label htmlFor="genre">
          Filtrar por gênero
          <select name="genre" value={selectedGenre} onChange={onSelectedGenreChange}>
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
