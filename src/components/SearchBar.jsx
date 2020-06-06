import React, { Component } from 'react';
import Input from './formsComponents/Input';
import Select from './formsComponents/Select';

class SearchBar extends Component {
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
        <Input
          type="text"
          value={searchText}
          onChange={onSearchTextChange}
          label="Inclui o texto:"
        />
        <Input
          type="checkbox"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
          label="Mostrar somente favoritos"
        />
        <Select
          value={selectedGenre}
          onChange={onSelectedGenreChange}
          label="Filtrar por gênero"
        />
      </form>
    );
  }
}

export default SearchBar;
