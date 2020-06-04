import React, { PureComponent } from 'react';

class SearchBar extends PureComponent {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;

    const genres = {
      Todos: '',
      Ação: 'action',
      Comédia: 'comedy',
      Suspense: 'thriller',
    };

    return (
      <form>
        <label>
          Inclui o texto
          <input type="text" name="searchText" value={searchText} onChange={onSearchTextChange} />
        </label>
        <label>
          Mostrar somente favoritos
          <input type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        </label>
        <label>Filtrar por gênero</label>
        <select value={selectedGenre} onChange={onSelectedGenreChange}>
          {Object.keys(genres).map((genre) => (
            <option key={genres[genre]} value={genres[genre]}>
              {genre}
            </option>
          ))}
        </select>
      </form>
    );
  }
}

export default SearchBar;
