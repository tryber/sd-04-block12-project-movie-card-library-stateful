// implement SearchBar component here
import React, { Component } from 'react';

class SearchBar extends Component {
  textIncluded = (searchText, onSearchTextChange) => {
    return (
      <label htmlFor="textIncluded">
        Inclui o texto:
        <input
          type="text"
          width="200px"
          name="textIncluded"
          // style={input}
          value={searchText}
          onChange={() => onSearchTextChange}
        />
      </label>
      // <br />
    );
  };
  favoriteOnly = (bookmakedOnly, onBookmarkedChange) => {
    return (
      <label htmlFor="favOnly">
        <input
          type="radio"
          name="favOnly"
          value={bookmakedOnly}
          onChange={() => onBookmarkedChange}
        />
        Mostrar somente favoritos
      </label>
      // <br />
    );
  };
  genreFilter = (selectedGenre, onSelectedGenreChange) => {
    return (
      <label htmlFor="genreFilter">
        Filtrar por Gênero:
        <select
          name="genreFilter"
          // style={input}
          value={selectedGenre}
          onChange={() => onSelectedGenreChange}
        >
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
      // <br />
    );
  };
  render() {
    const {
      searchText,
      bookmakedOnly,
      selectedGenre,
      onSearchTextChange,
      onBookmarkedChange,
      onSelectedGenreChange,
    } = this.props;
    // const input = { width: '100%' };
    return (
      <div>
        <small>SearchBar: Req: 1-5</small>
        <br />
        <form>
          {this.textIncluded(searchText, onSearchTextChange)}
          {this.favoriteOnly(bookmakedOnly, onBookmarkedChange)}
          {this.genreFilter(selectedGenre, onSelectedGenreChange)}
          <br />
        </form>
        <hr />
      </div>
    );
  }
}

export default SearchBar;

// render() {
//   const {
//     searchText,
//     onSearchTextChange,
//     bookmarkedOnly,
//     onBookmarkedChange,
//     selectedGenre,
//     onSelectedGenreChange,
//   } = this.props;
//   return (
//     <div>
//       {/* <p>Requisito1</p> */}
//       <form>
//         <fieldset>
//           <label htmlFor="textInclude">
//             Inclui o texto:
//             <input
//               tybe="text"
//               name="textInclude"
//               value={this.props.searchText}
//               onChange={onSearchTextChange}
//             ></input>
//           </label>
//           <label htmlFor="onlyFavorites">
//             Mostrar somente favoritos:
//             <input
//               type="checkbox"
//               name="onlyFavorites"
//               value={this.props.bookmarkedOnly}
//               onChange={onBookmarkedChange}
//             ></input>
//           </label>
//           <label htmlFor="genreFilter">
//             Filtrar por gênero:
//             <select
//               id="estado"
//               name="genreFilter"
//               value={this.props.selectedGenre}
//               onChange={onSelectedGenreChange}
//             >
//               <option value="">Todos</option>
//               <option value="action">Ação</option>
//               <option value="comedy">Comédia</option>
//               <option value="thriller">Suspense</option>
//             </select>
//           </label>
//         </fieldset>
//       </form>
//     </div>
//   );
// }
// }
// {
/* <label htmlFor="textIncluded">
            Inclui o texto:
            <input
              type="text"
              width="200px"
              name="textIncluded"
              style={input}
              value={searchText}
              onChange={() => onSearchTextChange}
            />
          </label>
          <br /> */
// }
// {
/* <label htmlFor="favOnly">
            <input
              type="radio"
              name="favOnly"
              value={bookmakedOnly}
              onChange={() => onBookmarkedChange}
            />
            Mostrar somente favoritos
          </label>
          <br /> */
// }
// {
/* <label htmlFor="genreFilter">
            Filtrar por Gênero:
            <select
              name="genreFilter"
              style={input}
              value={selectedGenre}
              onChange={() => onSelectedGenreChange}
            >
              <option value="">Todos</option>
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>
            </select>
          </label>
          <br /> */
// }
