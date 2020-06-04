import React from 'react';

class SearchBar extends React.Component {
  formTextElements() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="searchText">
        Inclui o texto:
        <input
          name="searchText"
          type="text"
          id="searchText"
          value={searchText}
          onChange={onSearchTextChange}
        />
      </label>
    );
  }

  formCheckboxElements() {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;

    return (
      <label htmlFor="bookmarked">
        Mostrar somente favoritos
        <input
          name="bookmarkedOnly"
          id="bookmarked"
          type="checkbox"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
        />
      </label>
    );
  }

  // formSelectElements() {
  //   const { selectedGenre, onSelectedGenreChange } = this.props;

  //   return (
  //     <label htmlFor="genre">
  //       Filtrar por gênero
  //       <select
  //         name="selectedGenre"
  //         id="genre"
  //         value={selectedGenre}
  //         onChange={onSelectedGenreChange}
  //       >
  //         <option value="">Todos</option>
  //         <option value="action">Ação</option>
  //         <option value="comedy">Comédia</option>
  //         <option value="thriller">Suspense</option>
  //       </select>
  //     </label>
  //   );
  // }

  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <form>
        {this.formTextElements()}
        {this.formCheckboxElements()}
        <label htmlFor="genre">
          Filtrar por gênero
          <select
            name="selectedGenre"
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
      </form>
    );
  }
}

export default SearchBar;
