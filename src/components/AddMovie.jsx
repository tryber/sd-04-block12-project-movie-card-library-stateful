// implement AddMovie component here
import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props){
    super(props);
    this.state = {
      subtitle: '', title: '',
      imagePath: '', storyline: '',
      rating: 0, genre: 'action',
    }
  }

  render() {
    cosnt { onClick } = this.props;
    return (
      <div>
        <form>

        </form>
      </div>
    );
  }
}

export default AddMovie;