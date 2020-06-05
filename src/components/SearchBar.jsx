// implement SearchBar component here
import React, { Component } from 'react';

function inputs({ name, value, onChange, type, label }) {
  return (
    <div>
      <label htmlFor={name}>
        {label}
        <input type={type} name={name} value={value} onChange={onChange} />
      </label>
    </div>
  );
}

class SearchBar extends Component {
  render() {
    const {
      searchText, onSearchTextChange,
      onBookmarkedChange, selectedGenre,
      onSelectedGenreChange, bookmarkedOnly,
    } = this.props;
    return (
      <form>
        {inputs({ name: 'search', label: 'Inclui o texto:', type: 'text', value: searchText, onChange: onSearchTextChange })}
        <label htmlFor='checkbox'>Mostrar somente favoritos</label>
        <input type='checkbox' name='checkbox' checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        <label htmlFor="genre">
          Filtrar por gênero
          <select value={selectedGenre} name="genre" onChange={onSelectedGenreChange}>
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
