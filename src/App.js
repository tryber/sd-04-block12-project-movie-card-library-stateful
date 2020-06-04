import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Header from './components/Header';

// const searchText = '';
// const selectedGenre = '';
// const bookmarkedOnly = true;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      // onBookmarkedChange,
      selectedGenre: '',
      // onSelectedGenre,
    };
  }
  onBookmarkedChange = () => {
    console.log('onBookmarkedChange');
  };
  onSelectedGenre = () => {
    console.log('onSelectedGenre');
  };
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onBookmarkedChange={this.state.onBookmarkedChange}
          onSelectedGenre={this.state.onSelectedGenre}
        />
        {/* <SearchBar searchOptions={(searchText, selectedGenre, bookmarkedOnly)} /> */}
      </div>
    );
  }
}

export default App;
