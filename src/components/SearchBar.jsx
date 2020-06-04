import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookMarkedOnly: false,
      selectGenre: '',
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectGenreChange = this.onSelectGenreChange.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({search: event.target.value});
  }

  onBookmarkedChange(event) {
    this.setState({bookMarkedOnly: event.target.value});
  }

  onSelectGenreChange(event) {
    this.setState({selectGenre: event.target.value});
  }

  render() {
    return (
      <div>
        <label htmlFor="search-bar">Inclui o texto:</label>
        <input
          type="text"
          name="search-bar"
          value={this.state.searchText}
          onChange={this.onSearchTextChange}
        />
        <input
          type="checkbox"
          name="checkbox"
          checked={this.state.bookMarkedOnly}
          onChange={this.onBookmarkedChange}
        />
        <label htmlFor="checkbox">Mostrar somente favoritos</label>
        <label htmlFor="select-genre">Filtrar por genero</label>
        <select name="select=-genre" onChange={this.onSelectGenreChange}>
          <option selected value={this.state.selectGenre}>Todos</option>
          <option value="action">Acao</option>
          <option value="comedy">Comedia</option>
          <option value="thriller">Suspense</option>
        </select>
      </div>
    );
  }
}

export default SearchBar;
