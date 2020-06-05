import React, { Component } from 'react';
import SelectComp from './SelectComp';

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
    this.setState({ search: event.target.value });
  }

  onBookmarkedChange(event) {
    this.setState({ bookMarkedOnly: event.target.value });
  }

  onSelectGenreChange(event) {
    this.setState({ selectGenre: event.target.value });
  }

  render() {
    return (
      <div className="sbar-component">
        <label htmlFor="#">Inclui o texto:</label>
        <input
          type="text"
          value={this.state.searchText}
          onChange={this.onSearchTextChange}
        />
        <label htmlFor="#">
          <input
            type="checkbox"
            checked={this.state.bookMarkedOnly}
            onChange={this.onBookmarkedChange}
          />Mostrar somente favoritos
        </label>
        <label htmlFor="select-genre">Filtrar por genero</label>
        <SelectComp 
          name = {this.state.selectGenre} 
          onChange = {this.onSelectGenreChange}
          defValue = {this.state.selectGenre}
        />
      </div>
    );
  }
}

export default SearchBar;
