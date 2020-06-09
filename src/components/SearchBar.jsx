import React from 'react';

const genreOptions = [
  { text: 'Todos', value: '' },
  { text: 'Ação', value: 'action' },
  { text: 'Comédia', value: 'comedy' },
  { text: 'Suspense', value: 'thriller' },
];

const inputSearchText = (searchText, onSearchTextChange) => {
  return (
    <div>
      <label htmlFor="searchText">Inclui o texto</label>
      <input
        type="text"
        id="searchText"
        value={searchText}
        onChange={onSearchTextChange}
      />
    </div>
  );
};

const selectGenre = (selectedGenre, onSelectedGenreChange) => {
  return (
    <div>
      <label htmlFor="selectedGenre">Filtrar por gênero</label>
      <select
        id="selectedGenre"
        value={selectedGenre}
        onChange={onSelectedGenreChange}
      >
        {genreOptions.map((element) => (
          <option key={element.value} value={element.value}>
            {element.text}
          </option>
        ))}
      </select>
    </div>
  );
};

class SearchBar extends React.Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <div>
        <form>
          {inputSearchText(searchText, onSearchTextChange)}
          <label htmlFor="bookmarkedOnly">Mostrar somente favoritos </label>
          <input
            id="bookmarkedOnly"
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
          {selectGenre(selectedGenre, onSelectedGenreChange)}
        </form>
      </div>
    );
  }
}

export default SearchBar;
