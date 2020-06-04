import React from 'react';
import './App.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
// import MovieList from './components/MovieList;'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
  }

  onSearchTextChange = () => {};

  onBookmarkedChange = () => {};

  onSelectedGenreChange = () => {};

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        {/* <MovieList /> */}
      </div>
    );
  }
}

export default App;
