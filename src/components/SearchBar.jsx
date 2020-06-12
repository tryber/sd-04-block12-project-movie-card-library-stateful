import React from "react";

class SearchBar extends React.Component {
  createSelectInput() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="genre">
        Filtrar por gênero
        <select
          id="genre"
          value={selectedGenre}
          onChange={onSelectedGenreChange}
        >
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange
    } = this.props;
    return (
      <form>
        <label htmlFor="includesText">
          Inclui o texto:
          <input type="text" value={searchText} onChange={onSearchTextChange} />
        </label>
        <label htmlFor="onlyBookmarked">
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
        </label>
        {this.createSelectInput()}
      </form>
    );
  }
}

export default SearchBar;
