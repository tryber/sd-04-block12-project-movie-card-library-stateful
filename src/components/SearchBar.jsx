// implement SearchBar component here
import React, { Component } from 'react';
import Input from './form/Input';

class Name extends Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <form>
        <Input label="Inclui o texto:" name="text" type="text" Tag="input" value={searchText} onChange={onSearchTextChange} />
        <Input label="Mostrar somente favoritos" name="book" type="checkbox" Tag="input" value={bookmarkedOnly} onChange={onBookmarkedChange} />
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

export default Name;
