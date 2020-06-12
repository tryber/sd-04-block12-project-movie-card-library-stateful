import React, { Component } from 'react';
import Input from './formsComponents/Input';
import Select from './formsComponents/Select';

class SearchBar extends Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange,
    } = this.props;
    return (
      <form>
        <Input v={searchText} onC={onSearchTextChange} l="Inclui o texto:" />
        <Input
          t="checkbox"
          checked={bookmarkedOnly}
          onC={onBookmarkedChange}
          l="Mostrar somente favoritos"
        />
        <Select v={selectedGenre} onC={onSelectedGenreChange} l="Filtrar por gênero" />
      </form>
    );
  }
}

export default SearchBar;
