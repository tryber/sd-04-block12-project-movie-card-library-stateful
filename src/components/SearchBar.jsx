// implement SearchBar component here
import React, { Component } from 'react';

class SearchBar extends Component {
  // createForm(alias, mark, kind, grade, change) {
  //   return (
  //     <div>
  //       <label htmlFor={alias}>
  //         {mark}
  //         <input type={kind} name={alias} value={grade} onChange={change} />
  //       </label>
  //     </div>
  //   );
  // }
  textIncluded() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <div>
        <label htmlFor="input">
          Inclui o texto:
          <input type="text" name="input" value={searchText} onChange={onSearchTextChange} />
        </label>
      </div>
    );
  }
  favoriteOnly() {
    const { bookmakedOnly, onBookmarkedChange } = this.props;
    return (
      <label htmlFor="fav">
        <input type="radio" name="fav" value={bookmakedOnly} onChange={onBookmarkedChange} />
        Mostrar somente favoritos
      </label>
    );
  }
  genreFilter() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="genreFilter">
        Filtrar por Gênero
        <select name="genreFilter" value={selectedGenre} onChange={onSelectedGenreChange}>
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
      // <br />
    );
  }
  render() {
    // const { searchText, onSearchTextChange, bookmakedOnly, onBookmarkedChange } = this.props;
    return (
      <div>
        <small>SearchBar: Req: 1-5</small>
        <br />
        <form>
          {this.textIncluded()}
          <br />
          {this.favoriteOnly()}
          <br />
          {this.genreFilter()}
          <br />
        </form>
        <hr />
      </div>
    );
  }
}

export default SearchBar;
