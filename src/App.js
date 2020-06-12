import React, { Component } from 'react';
import './App.css';
// import SearchBar from './components/SearchBar';
import Header from './components/Header';
import MovieLibray from './components/MovieLibrary';
import AddMovie from './components/AddMovie';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.onSearchTextChange = this.onSearchTextChange.bind(this);
  //   this.onSearchTextChange = this.onSearchTextChange.bind(this);
  //   this.state = {
  //     searchText: '',
  //     bookmarkedOnly: false,
  //     selectedGenre: '',
  //     movies: this.props.movies,
  //   };
  // }
  // onBookmarkedChange = () => {
  //   console.log('onBookmarkedChange');
  // };
  // onSelectedGenre = () => {
  //   console.log('onSelectedGenre');
  // };
  render() {
    return (
      <div className="App">
        <Header />
        <MovieLibray />
        {/* <AddMovie /> */}
        {/* <SearchBar
          searchText={this.state.searchText}
          bookmarkedOnly={this.state.bookmarkedOnly}
          selectedGenre={this.state.selectedGenre}
          onBookmarkedChange={this.state.onBookmarkedChange}
          onSelectedGenre={this.state.onSelectedGenre}
        /> */}
        {/* <SearchBar searchOptions={(searchText, selectedGenre, bookmarkedOnly)} /> */}
      </div>
    );
  }
}

export default App;
