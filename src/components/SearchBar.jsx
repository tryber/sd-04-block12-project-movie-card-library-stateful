import React from 'react';

const SearchTextInput = (props) => {
  const { searchText, onChange } = props;
  return (
    <div>
      <label htmlFor="search">Inclui o texto: </label>
      <input
        id="search"
        type="text"
        value={searchText}
        onChange={(event) => onChange(event)}
      />
    </div>
  );
};

const BookmarkedOnlyInput = (props) => {
  const { bookmarkedOnly, onChange } = props;
  return (
    <div>
      <label htmlFor="bookmark">Mostrar somente favoritos:</label>
      <input
        id="bookmark"
        type="checkbox"
        checked={bookmarkedOnly}
        onChange={(event) => onChange(event)}
      />
    </div>
  );
};

const GenreFilterSelect = (props) => {
  const { selectedGenre, onChange } = props;
  return (
    <div>
      <label htmlFor="genre">Filtrar por gênero:</label>
      <select
        id="genre"
        value={selectedGenre}
        onChange={(event) => onChange(event)}
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
          onChange={onSearchTextChange}
        />
        <BookmarkedOnlyInput
          bookmarkedOnly={bookmarkedOnly}
          onChange={onBookmarkedChange}
        />
        <GenreFilterSelect
          selectedGenre={selectedGenre}
          onChange={onSelectedGenreChange}
        />
      </form>
    );
  }
}

export default SearchBar;
