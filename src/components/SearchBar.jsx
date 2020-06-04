// implement SearchBar component here
import React, { Component } from 'react';

class SearchBar extends Component {
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
      <div>
        {/* <p>Requisito1</p> */}
        <form>
          <fieldset>
            <label htmlFor="textInclude">
              Inclui o texto:
              <input
                tybe="text"
                name="textInclude"
                value={this.props.searchText}
                onChange={onSearchTextChange}
              ></input>
            </label>
            <label htmlFor="onlyFavorites">
              Mostrar somente favoritos:
              <input
                type="checkbox"
                name="onlyFavorites"
                value={this.props.searchText}
                onChange={onBookmarkedChange}
              ></input>
            </label>
            <label htmlFor="genreFilter">
              Filtrar por gênero:
              <select id="estado" name="genreFilter" value={this.props.selectedGenre}>
                <option value="">Todos</option>
                <option value="action">Ação</option>
                <option value="comedy">Comédia</option>
                <option value="thriller">Suspense</option>
              </select>
            </label>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default SearchBar;
