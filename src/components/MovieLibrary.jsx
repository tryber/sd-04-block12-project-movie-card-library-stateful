import React from 'react';
import SearchBar from './SearchBar';

export default class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);


    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };

  }

  onSearchTextChange(event) {
    const {name , value} = this.state;
    this.setState(() => ({[name]: value}))
  }

  bookmarkedOnly(event) {
    console.log(event.target)
  }

  onSelectedGenreChange(event) {
    console.log(event.target)
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
          onSearchTextChange={this.onSearchTextChange}
          onSelectedGenreChange={this.onSelectedGenreChange}
          onBookmarkedChange={this.onBookmarkedChange}
        />
      </div>
    )
  }
}
