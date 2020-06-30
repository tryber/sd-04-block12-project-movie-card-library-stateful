import React from 'react';

const SearchTextInput = (props) => {
  const { searchText, onSearchTextChange } = props;
  return (
    <div>
      <label>Inclui o texto: </label>
      <input
        type="text"
        value={searchText}
        onChange={onSearchTextChange}
      ></input>
    </div>
  );
}

const BookmarkedOnlyInput = (props) => {
  const { bookmarkedOnly, onBookmarkedChange } = props;
  return (
    <div>
      <label>Mostrar somente favoritos:</label>
      <input
        type="checkbox"
        checked={bookmarkedOnly}
        onChange={onBookmarkedChange}
      ></input>
    </div>
  );
}

const GenreFilterSelect = (props) => {
  const { selectedGenre, onSelectedGenreChange } = props;
  return (
    <div>
      <label>Filtrar por gênero:</label>
      <select
        value={selectedGenre}
        onChange={onSelectedGenreChange}
      >
        <option value="">Todos</option>
        <option value="action">Ação</option>
        <option value="comedy">Comédia</option>
        <option value="thriller">Suspense</option>
      </select>
    </div>
  );
}

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
