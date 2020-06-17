// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
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
    this.modify = this.modify.bind(this);
    this.reset = this.reset.bind(this);
    this.button = this.button.bind(this);
  }

  modify(element) {
    this.setState({
      title: element.target.value,
      subtitle: element.target.value,
      imagePath: element.target.value,
      storyline: element.target.value,
      rating: Number(element.target.value),
      genre: element.target.value,
    });
  }

  reset() {
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  button() {
    this.props.onClick(this.state);
    this.reset();
  }

}

export default AddMovie;
