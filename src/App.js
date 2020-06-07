import React from 'react';
import SearchBar from './components/SearchBar';
import './App.css';

import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar SearchBar="" onSearchTextChange="" />
    </div>
  );
}

export default App;
