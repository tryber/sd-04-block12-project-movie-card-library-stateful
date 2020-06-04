// implement SearchBar component here
import React from 'react';

export default class SearchBar extends React.Component {
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
        <input
          onChange={onSearchTextChange}
          type="text"
          placeholder="Insira o filme que você procura"
          value={searchText}
        />
        <input type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        <select type="select" value={selectedGenre} onChange={onSelectedGenreChange}>
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </div>
    );
  }
}
