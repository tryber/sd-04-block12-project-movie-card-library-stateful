import React from 'react';
import './App.css';
import Addmovie from './components/AddMovie';

import Header from './components/Header';

import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary />
      <Addmovie />
    </div>
  );
}

export default App;
