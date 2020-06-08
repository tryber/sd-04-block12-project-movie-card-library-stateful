// implement AddMovie component here
import React, { Component } from 'react';
import SearchBar from './SearchBar.jsx';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.storeTitle = this.storeTitle.bind(this);
  }
  storeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }
  render() {
    return (
      <SearchBar>
        <label htmlFor="title">Título</label>
        <input type="text" id="title" value={this.state.title} onChange={this.storeTitle} />
      </SearchBar>
    );
  }
}

export default AddMovie;
