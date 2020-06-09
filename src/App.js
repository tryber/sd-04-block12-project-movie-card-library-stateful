import React from 'react';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
import Header from './components/Header';
import data from './data';

function App() {
  return (
    <div className="App">
      <Header />
      {/* MovieLibrary é o componente o movies é a props e eu
      estou pasando {data} como valor da props. */}
      <MovieLibrary movies={data} />
    </div>
  );
}

export default App;
