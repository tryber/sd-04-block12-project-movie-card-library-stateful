// implement SearchBar component here
import React, { Components } from 'react';

class SearchBar extends Components {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmakedChange,
      selectGenre,
      onSelectGenreChange,
    } = this.props;

    return (
      <form>
        <label htmlFor="nomeF">Inclue o Texto</label>
        <input id="nomeF"
          type="text"
          value={searchText}
          onChange={onSearchTextChange}
        />
        <label htmlFor="check">Mostrar somente Favoritos </label>
        <input id="check"
          type="checkbox"
          checked={bookmarkedOnly}
          onChange={onBookmakedChange}
        />
        <label htmlFor="gender">Filtrar por Gênero </label>
        <select id="gender" value={selectGenre} onChange={onSelectGenreChange}>
          <option key="Todos" value="">Todos</option>
          <option key="Ação" value="action">Ação</option>
          <option key="Comédia" value="comedy">Comédia</option>
          <option key="Suspense" value="thiller">Suspense</option>
        </select>
      </form>
    );
  }
}

export default SearchBar;
