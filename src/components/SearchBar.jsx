import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.renderHalf = this.renderHalf.bind(this);
  }

  renderHalf() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <div>
        <label htmlFor="searchText">
          Inclui o texto:
          <input type="text" name="searchText" value={searchText} onChange={onSearchTextChange} />
        </label>
        <br />
        <label htmlFor="Mostrar somente favoritos">
          Mostrar somente favoritos
          <input
            type="checkbox"
            name="bookmarkedOnly"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
        </label>
      </div>
    );
  }

  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;

    return (
      <div>
        <form>
          {this.renderHalf()}
          <label htmlFor="selectedGenre">
            Filtrar por gênero
            <select
              value={selectedGenre}
              name="selectedGenre"
              onChange={onSelectedGenreChange}
            >
              <option value="">Todos</option>
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}
