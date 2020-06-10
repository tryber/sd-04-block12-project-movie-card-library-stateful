import React from 'react';
import './App.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MovieLibrary />
    </div>
  );
}

export default App;
