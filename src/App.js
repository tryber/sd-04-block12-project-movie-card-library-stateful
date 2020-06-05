import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <AddMovie />
    </div>
  );
}

export default App;
