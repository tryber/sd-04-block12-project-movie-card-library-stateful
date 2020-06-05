import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: '',
      selectedGenre: '',
    };
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="texto">Inclui o texto: <input
            type="text"
            onChange={this.props.onSearchTextChange}
            value={searchText}
          />
          </label>
          <label htmlFor="favoritos">Mostrar somente favoritos <input
            type="checkbox"
            checked={bookmarkedOnly} onChange={this.props.onBookmarkedChange}
          />
          </label>
          <label htmlFor="genre">Filtrar por gênero
          <select
            value={selectedGenre}
            onChange={this.props.onSelectedGenreChange}
          >
            <option value="">Todos</option><option value="action">Ação</option>
            <option value="comedy">Comédia</option><option value="thriller">Suspense</option>
          </select></label>
        </form>
      </div>
    );
  }
}
