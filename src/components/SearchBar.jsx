// implement SearchBar component here
import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    const { searchText, onSearchTextChange, bookmarkedOnly,
      image, onBookmarkedChange, selectedGenre, onSelectedGenreChange
    } = this.props;
  }

  render() {
    return (
      <div>
        <form>
          <label>Inclui o texto: </label>
            <input type="text" value={this.props.searchText} onChange={this.props.onSearchTextChange} />
            <br />
            <label>Mostrar somente favoritos &nbsp;</label>
            <input type="checkbox" checked={this.props.bookmarkedOnly} onChange={this.props.onBookmarkedChange}/>
            <br />
            <label>Filtrar por gênero</label>
            <select value={this.props.selectedGenre} onChange={this.props.onSelectedGenreChange}>
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
            </select>
        </form>
      </div>
    );
  }
}

export default SearchBar;