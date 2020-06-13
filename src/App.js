import React from 'react';
import data from './data';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header className="mcl-s-header" />
      <MovieLibrary movies={data} />
    </div>
  );
}

export default App;