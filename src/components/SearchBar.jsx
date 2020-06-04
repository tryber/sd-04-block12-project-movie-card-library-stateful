import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: 'all',
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
          <input type='text' />
        </form>
      </div>
    );
  }
}
