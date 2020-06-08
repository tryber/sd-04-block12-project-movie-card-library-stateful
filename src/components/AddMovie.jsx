// implement AddMovie component here
import React, { Component } from 'react';
import SearchBar from './SearchBar.jsx';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: "",
      title: "",
      imagePath: "",
      storyline: "",
      rating: 0,
      genre: "action",
    };
  }
  render() {
    return (
      <SearchBar />
    );
  }
}

export default AddMovie;
