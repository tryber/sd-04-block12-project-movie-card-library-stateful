import React, { PureComponent } from 'react';

class SearchBar extends PureComponent {
  genres = {
    Todos: '',
    Ação: 'action',
    Comédia: 'comedy',
    Suspense: 'thriller',
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
        <label>Inclui o texto</label>
        <input type="text" value={searchText} onChange={onSearchTextChange} />
        <label>Mostrar somente favoritos</label>
        <input type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        <label>Filtrar por gênero</label>
        <select value={selectedGenre} onChange={onSelectedGenreChange}>
          {Object.keys(this.genres).map((genre) => (
            <option key={this.genres[genre]} value={this.genres[genre]}>
              {genre}
            </option>
          ))}
        </select>
      </form>
    );
  }
}

export default SearchBar;
