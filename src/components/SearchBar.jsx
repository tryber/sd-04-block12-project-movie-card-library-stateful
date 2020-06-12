import React from 'react';

const genres = [
  {
    text: 'Todos',
    value: '',
  },
  {
    text: 'Ação',
    value: 'action',
  },
  {
    text: 'Comédia',
    value: 'comedy',
  },
  {
    text: 'Suspense',
    value: 'thriller',
  },
];

class SearchBar extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange } = this.props;
    const { selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <div className="main-container">
        <form>
          <label htmlFor="search">
            Inclui o texto:
            <input name="search" type="text" value={searchText} onChange={onSearchTextChange} />
          </label>
          <label htmlFor="showfav">
            Mostrar somente favoritos:
            <input name="showfav" type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
          </label>
          <label htmlFor="genderfilter">
            Filtrar por gênero
            <select name="genderfilter" type="text" value={selectedGenre} onChange={onSelectedGenreChange}>
              {genres.map((genre) => (
                <option key={genre.value} value={genre.value}>
                  {genre.text}
                </option>
              ))}
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
