import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnlt: false,
      selectedGenre: '',
    }
  }

  onSearchTextChange = event => {
    this.setState({
      filter: event.target.value === '' ? 'all' : event.target.value
    })
  }

  onBookmarkedChange = event => {

  }

  onSelectedGenreChange = event => {

  }

  render() {
    return (
      <div>
        <form>
          <label>Inclui o texto: <input onChange={this.onSearchTextChange} value={this.state.searchText} type='text' />
          </label>
        </form>
      </div>
    );
  }
}
