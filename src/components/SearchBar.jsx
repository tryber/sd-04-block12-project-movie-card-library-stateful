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
    return (
      <form>
        <label htmlFor="search">Inclui o texto:
          <input
            type="text" value={this.props.searchText} onChange={this.props.onSearchTextChange}
          />
        </label>
        <label htmlFor="showfav">Mostrar somente favoritos:
          <input
            type="checkbox" checked={this.props.bookmarkedOnly}
            onChange={this.props.onBookmarkedChange}
          />
        </label>
        <label htmlFor="genderfilter">Filtrar por gênero
          <select
            type="text" value={this.props.selectedGenre}
            onChange={this.props.onSelectedGenreChange}
          >
            {genres.map((genre) => (
              <option key={genre.value} value={genre.value}>
                {genre.text}
              </option>
            ))}
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
