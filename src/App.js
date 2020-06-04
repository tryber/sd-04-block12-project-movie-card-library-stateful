import React from 'react';
import './App.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import MovieLibrary from './components/MovieLibrary';

export default () => (
  <div className="App">
    <Header />
    <SearchBar />
    <MovieLibrary />
    <AddMovie />
  </div>
);
