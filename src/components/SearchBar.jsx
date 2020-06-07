// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        {' '}
        {/* CRIANDO O FORMS */}
        <form>
          <label name="entrada">Inclui o texto: </label>
          <input
            type="text"
            name="entrada"
            value={this.props.searchText}
            onChange={this.props.onSearchTextChange}
          />
          <br />
          <label name="check">Mostrar somente favoritos</label>
          <input
            type="checkbox"
            name="check"
            checked={this.props.bookmarkedOnly}
            onChange={this.props.onBookmarkedChange}
          />
          <br />
          <label name="selecao">Filtrar por gênero</label>
          <select
            name="selecao"
            value={this.props.selectedGenre}
            onChange={this.props.onSelectedGenreChange}
          >
            <br />
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
          <br />
        </form>
      </div>
    );
  }
}

export default SearchBar;
