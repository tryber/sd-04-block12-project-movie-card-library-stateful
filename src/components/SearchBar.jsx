// implement SearchBar component here
import React from 'react';

const genreOptions = [
  { text: 'Todos', value: '' },
  { text: 'Ação', value: 'action' },
  { text: 'Comédia', value: 'comedy' },
  { text: 'Suspense', value: 'thriller' },
];

class SearchBar extends React.Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange,
      selectedGenre, onSelectedGenreChange,
    } = this.props;
    // console.log(this.props)
    return (
      <div>
        <form action="">
          <label htmlFor="text">Inclui o texto</label>
          <input id="text" type="text" value={searchText} onChange={onSearchTextChange} />
          <label htmlFor="check">Mostrar somente favoritos</label>
          <input
            id="check"
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange} 
          />
          <label htmlFor="genre">Filtrar por gênero</label>
          <select name="" id="genre" value={selectedGenre} onChange={onSelectedGenreChange}>
            {genreOptions.map((genero) => (
              <option key={genero.value} value={genero.value}>{genero.text}</option>))}
          </select>
        </form>
      </div>
    );
  }
}

export default SearchBar;
