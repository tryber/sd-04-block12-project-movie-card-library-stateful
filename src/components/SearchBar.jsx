// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {
  renderSearch() {
    return (
      <label htmlFor="entrada">
        Inclui o texto:
        <input
          type="text"
          name="entrada"
          value={this.props.searchText}
          onChange={this.props.onSearchTextChange}
        />
      </label>
    );
  }

  renderCheck() {
    return (
      <label htmlFor="check">
        Mostrar somente favoritos
        <input
          type="checkbox"
          name="check"
          checked={this.props.bookmarkedOnly}
          onChange={this.props.onBookmarkedChange}
        />
      </label>
    );
  }

  render() {
    return (
      <div>
        {' '}
        {/* CRIANDO O FORMS */}
        <form>
          {this.renderSearch()}
          <br />
          {this.renderCheck()}
          <br />
          <label htmlFor="selecao">Filtrar por gênero</label>
          <select
            name="selecao"
            value={this.props.selectedGenre}
            onChange={this.props.onSelectedGenreChange}
          >
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
