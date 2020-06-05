import React from 'react';
import SearchBar from './SearchBar';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };

  }

  render() {
    const movies = this.props;
    return (
      <div>
        <SearchBar 
          searchText={searchText}
        />
      </div>
    )
  }
}