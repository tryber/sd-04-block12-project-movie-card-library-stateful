import React, { Component } from 'react';
import SelectFilter from './SelectFilter';
import Label from './Label';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookMarkedOnly: false,
      selectedGenre: '',
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
  }

  onSearchTextChange(event) {
    const { name, value } = event.target;
    console.log(`${name}: ${value}`);
    this.setState(() => ({ [name]: value }));
  }

  onBookmarkedChange(event) {
    this.setState({ bookmarkedOnly: event.target });
  }

  onSelectedGenreChange(event) {
    const { name, value } = event.target;
    this.setState(() => ({ [name]: value }));
  }

  render() {
    return (
      <form className="sbar-component">
        <Label
          text="Inclui o texto:"
          type="text"
          name="searchText"
          value={this.props.searchText}
          onChange={this.props.onSearchTextChange}
        />
        <label htmlFor="checkbox">
          <input
            type="checkbox" name="checkbox"
            checked={this.props.bookmarkedOnly} onChange={this.props.onBookmarkedChange}
          />Mostrar somente favoritos
        </label>
        <label htmlFor="genre">Filtrar por gênero</label>
        <SelectFilter
          name="genre" onChange={this.props.onSelectedGenreChange}
          selected={this.props.selectedGenre} value={this.props.selectedGenre}
        />
      </form>
    );
  }
}

export default SearchBar;
