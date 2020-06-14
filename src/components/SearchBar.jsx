// implement SearchBar component here
import React from 'react';

const genreOptions = [
  { text: 'Todos', value: '' },
  { text: 'Ação', value: 'action' },
  { text: 'Comédia', value: 'comedy' },
  { text: 'Suspense', value: 'thriller' },
];
const Select = (selectedGenre, onSelectedGenreChange) => (
  <label htmlFor="gender">Filtrar por gênero
    <select id="gender" type="select" value={selectedGenre} onChange={onSelectedGenreChange}>
      {genreOptions.map(({ text, value }) =>
        <option key={value} value={value}>{text}</option>,
      )}
    </select>
  </label>
);
class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="textMovie">Inclui o texto
        <input
          id="textMovie"
          type="text"
          value={this.props.searchText}
          onChange={this.props.onSearchTextChange}
        /></label>
        <label htmlFor="fav">Mostrar somente favoritos
        <input
          id="fav"
          type="checkbox"
          checked={this.props.bookmarkedOnly}
          onChange={this.props.onBookmarkedChange}
        /></label>
        {Select(this.props.selectedGenre, this.props.onSelectedGenreChange)}
      </form>
    );
  }
}

export default SearchBar;
