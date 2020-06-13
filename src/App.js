import React from 'react';
import './App.css';
import data from './data';

import Header from './components/Header';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MovieList movies={data} />
      <AddMovie />
    </div>
  );
}

export default App;
