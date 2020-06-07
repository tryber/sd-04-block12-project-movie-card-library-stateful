import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this); //func sem usar
  }

  onSearchTextChange = (event) => {
    const { value } = event.target;
    this.setState({
      searchText: value,
    });
  };

  onBookmarkedChange = (event) => {
    this.setState({
      bookmarkedOnly: this.state.bookmarkedOnly ? false : true,
    });
  };

  onSelectedGenreChange = (event) => {
    const { value } = event.target; // pegar valor do campo
    this.setState({
      selectedGenre: value, // selectedGenre vale o que a arrow pegou
    });
  };

  render() {
    return (
      <form>
        <div>
          <label htmlFor="searchText" />
          Inclui o texto:
          <input
            type="text"
            name="searchText"
            value={this.state.searchText}
            onChange={this.onSearchTextChange}
          />
        </div>
        <div>
          <input
            type="checkbox"
            name="bookmarkedOnly"
            checked={this.state.bookmarkedOnly}
            onChange={this.onBookmarkedChange}
          />
          <label htmlFor="bookmarkedOnly" />
          Mostrar somente favoritos
        </div>
        <div>
          <label htmlFor="selectedGenre" />
          Filtrar por gênero
          <select
            name="selectedGenre"
            value={this.state.selectedGenre}
            onChange={this.onSelectedGenreChange}
          >
            <option key="Todos" value="">
              Todos
            </option>
            <option key="Ação" value="action">
              Ação
            </option>
            <option key="Comédia" value="comedy">
              Comédia
            </option>
            <option key="Suspense" value="thriller">
              Suspense
            </option>
          </select>
        </div>
      </form>
    );
  }
}

export default SearchBar;
