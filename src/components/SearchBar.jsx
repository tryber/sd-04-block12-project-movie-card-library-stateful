import React, { PureComponent } from 'react';
import TextInput from './FormComponents/TextInput';

class SearchBar extends PureComponent {
  genres = {
    Todos: '',
    Ação: 'action',
    Comédia: 'comedy',
    Suspense: 'thriller',
  };

  generateOptions = (options) => {
    return Object.keys(options).map((option) => (
      <option key={options[option]} value={options[option]}>
        {option}
      </option>
    ));
  };

  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    return (
      <form>
        <TextInput
          name="textSearch"
          value={searchText}
          onChange={onSearchTextChange}
          label="Inclui o texto:"
        />
        <label>Mostrar somente favoritos</label>
        <input type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        <label>Filtrar por gênero</label>
        <select value={selectedGenre} onChange={onSelectedGenreChange}>
          {this.generateOptions(this.genres)}
        </select>
      </form>
    );
  }
}

export default SearchBar;
