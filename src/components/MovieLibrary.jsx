// implement MovieLibrary component here
import React from 'react';

import data from '../data';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={data} />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;
