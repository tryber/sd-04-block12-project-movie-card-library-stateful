import React from "react";

import GenreSelection from "./GenreSelection";

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange
    } = this.props;
    return (
      <form>
        <label htmlFor="includesText">
          Inclui o texto:
          <input
            type="text"
            id="includesText"
            value={searchText}
            onChange={onSearchTextChange}
          />
        </label>
        <label htmlFor="bookmarkedOnly">
          Mostrar somente favoritos
          <input
            type="checkbox"
            id="bookmarkedOnly"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
        </label>
        <GenreSelection
          id="selectedGenre"
          label="Filtrar pro gênero"
          value={selectedGenre}
          onChange={onSelectedGenreChange}
          items={[
            <option key="all" value="">
              Todos
            </option>,
            <option key="action" value="action">
              Ação
            </option>,
            <option key="comedy" value="comedy">
              Comédia
            </option>,
            <option key="thriller" value="thriller">
              Suspense
            </option>
          ]}
        />
      </form>
    );
  }
}

export default SearchBar;
