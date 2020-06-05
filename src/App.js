import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <AddMovie />
      </div>
    );
  }
}

export default App;
