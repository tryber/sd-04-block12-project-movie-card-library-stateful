import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar'

import Header from './components/Header';
// iniciando o projeto
function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
    </div>
  );
}

export default App;
