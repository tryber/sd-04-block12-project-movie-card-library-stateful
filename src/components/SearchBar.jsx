import React from 'react';

const SearchTextInput = (props) => {
  const { searchText, onSearchTextChange } = props;
  return (
    <div>
      <label htmlFor="search">Inclui o texto: </label>
      <input
        id="search"
        type="text"
        value={searchText}
        onChange={(event) => onSearchTextChange(event)}
      />
    </div>
  );
};

const BookmarkedOnlyInput = (props) => {
  const { bookmarkedOnly, onBookmarkedChange } = props;
  return (
    <div>
      <label htmlFor="bookmark">Mostrar somente favoritos:</label>
      <input
        id="bookmark"
        type="checkbox"
        checked={bookmarkedOnly}
        onChange={(event) => onBookmarkedChange(event)}
      />
    </div>
  );
};

const GenreFilterSelect = (props) => {
  const { selectedGenre, onSelectedGenreChange } = props;
  return (
    <div>
      <label htmlFor="genre">Filtrar por gênero:</label>
      <select
        id="genre"
        value={selectedGenre}
        onChange={(event) => onSelectedGenreChange(event)}
      >
        <option value="">Todos</option>
        <option value="action">Ação</option>
        <option value="comedy">Comédia</option>
        <option value="thriller">Suspense</option>
      </select>
    </div>
  );
};

class SearchBar extends React.Component {
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
        <SearchTextInput
          searchText={searchText}
          onSearchTextChange={onSearchTextChange}
        />
        <BookmarkedOnlyInput
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={onBookmarkedChange}
        />
        <GenreFilterSelect
          selectedGenre={selectedGenre}
          onSelectedGenreChange={onSelectedGenreChange}
        />
      </form>
    );
  }
}

export default SearchBar;
