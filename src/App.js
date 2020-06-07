import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import data from './data';
import SearchBar from './components/SearchBar';
//comentario generico só pra ver um trem

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MovieList movies={data} />
    </div>
  );
}

export default App;
