import React from 'react';
import Select from './Select';

export default class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      bookmarkedOnly,
      selectedGenre,
      onSearchTextChange,
      onSelectedGenreChange,
      onBookmarkedChange,
    } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="texto">
            Inclui o texto:
            <input type="text" onChange={onSearchTextChange} value={searchText} />
          </label>
          <label htmlFor="favoritos">
            Mostrar somente favoritos
            <input type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
          </label>
          <Select selectedGenre={selectedGenre} onSelectedGenreChange={onSelectedGenreChange} />
        </form>
      </div>
    );
  }
}
