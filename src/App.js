import React from 'react';
import './App.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchText: '',
      onSearchTextChange: Function,
      bookmarkedOnly: Boolean,
      onBookmarkedChange: Function,
      selectedGenre: '',
      onSelectedGenreChange: Function
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.state.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.state.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.state.onSelectedGenreChange}
        />
        {/* <MovieList /> */}
      </div>
    );
  }
}

export default App;
