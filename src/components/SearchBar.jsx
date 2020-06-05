// implement SearchBar component here
import React, { Component } from 'react';
import Input from './form/Input';

class SearchBar extends Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly: marked,
      onBookmarkedChange: markedChange, selectedGenre, onSelectedGenreChange,
    } = this.props;
    const input = ['Inclui o texto:', 'text', 'text', 'input', searchText, onSearchTextChange];
    return (
      <form>
        <Input key={input[1]} data={input} />
        <label htmlFor="book">
          Mostrar somente favoritos
          <input name="book" type="checkbox" checked={marked} onChange={markedChange} />
        </label>
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
