import React from 'react';
import './App.css';
// import AddMovie from './components/AddMovie'
import MovieLibrary from './components/MovieLibrary';
import data from './data';
import Header from './components/Header';
// iniciando o projeto
function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={data} />
    </div>
  );
}

export default App;
