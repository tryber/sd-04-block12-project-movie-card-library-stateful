import React from 'react';

const genreOptions = [
  { text: 'Todos', value: '' },
  { text: 'Ação', value: 'action' },
  { text: 'Comédia', value: 'comedy' },
  { text: 'Suspense', value: 'thriller' },
];

class SearchBar extends React.Component {

  render() {

    return (
      <div>
        <form>
          <label>
            Inclui o texto: 
            <input type="text" value={this.props.searchText} onChange={this.props.onSearchTextChange} />
          </label>
          <label>
            Mostrar somente favoritos
            <input type="checkbox" checked={this.props.bookmarkedOnly} onChange={this.props.onBookmarkedChange} />
          </label>
          <label>
            Filtrar por gênero
            <select value={this.props.selectedGenre} onChange={this.props.onSelectedGenreChange}>
              {genreOptions.map((genre) => (
                <option key={genre.value} value={genre.value}>{genre.text}</option>
              ))}
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;