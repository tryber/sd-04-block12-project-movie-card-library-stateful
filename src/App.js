import React from 'react';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import './App.css';

import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar
        SearchBar=""
        onSearchTextChange=""
        bookmarkedOnly=""
        onBookmarkedChange=""
        selectedGenre=""
        onSelectedGenreChange=""
      />
      <AddMovie />
    </div>
  );
}

export default App;
