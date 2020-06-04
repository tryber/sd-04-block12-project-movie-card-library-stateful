import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: '',
      selectedGenre: '',
    }
  }

  onSearchTextChange(event) {
    this.setState({
      searchText: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form>
          <label>Inclui o texto: <input type='text' onChange={this.props.onSearchTextChange} value={this.props.searchText} /> </label>
          <label>Mostrar somente favoritos <input type='checkbox' checked={this.props.bookmarkedOnly} onChange={this.props.onBookmarkedChange} /></label>
          <label>Filtrar por gênero <select value={this.props.selectedGenre} onChange={this.props.onSelectedGenreChange}>
            <option value=''>Todos</option>
            <option value='action'>Ação</option>
            <option value='comedy'>Comédia</option>
            <option value='thriller'>Suspense</option>
          </select></label>
        </form>
      </div>
    );
  }
}
