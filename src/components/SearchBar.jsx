// implement SearchBar component here
import React from 'react';

const genres = [{ value: '', text: 'Todos' },
{ value: 'action', text: 'Ação' },
{ value: 'comedy', text: 'Comédia' },
{ value: 'thriller', text: 'Suspense' },]
export class SearchBar extends React.Component {

  render() {
    return (
      <form>
        <label>
          Inclui o texto
          <input
            type="text"
            name="searchText"
            value={this.props.searchText}
            onChange={this.props.onSearchTextChange}
          />
        </label>
        <label>
          Mostrar somente favoritos
          <input
            type="checkbox"
            name="searchText"
            checked={this.props.bookmarkedOnly}
            onChange={this.props.onBookmarkedChange}
          />
        </label>
        <label>
          Filtrar por gênero
          <select
            name="searchText"
            value={this.props.selectedGenre}
            onChange={this.props.onSelectedGenreChange}
          >
            {genres.map(genre => (
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