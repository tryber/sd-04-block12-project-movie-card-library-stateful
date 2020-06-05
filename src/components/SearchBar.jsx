import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre,
       onSearchTextChange, onSelectedGenreChange, onBookmarkedChange } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="texto">Inclui o texto: <input
            type="text"
            onChange={onSearchTextChange}
            value={searchText}
          />
          </label>
          <label htmlFor="favoritos">Mostrar somente favoritos <input
            type="checkbox"
            checked={bookmarkedOnly} onChange={onBookmarkedChange}
          />
          </label>
          <label htmlFor="genre">Filtrar por gênero
          <select
            value={selectedGenre}
            onChange={onSelectedGenreChange}
          >
            <option value="">Todos</option><option value="action">Ação</option>
            <option value="comedy">Comédia</option><option value="thriller">Suspense</option>
          </select></label>
        </form>
      </div>
    );
  }
}
