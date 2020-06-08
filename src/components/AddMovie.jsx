// implement AddMovie component here
import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'Action',
    };
  }

  render() {
    const { onClick } = this.props;
    return (
      <form>
        <input type="submit" value="Submit" onClick={onClick} />
      </form>
    );
  }
}

export default AddMovie;
