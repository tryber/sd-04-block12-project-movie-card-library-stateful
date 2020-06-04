import React, { Component } from 'react';

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
  }

  handleInput = (event) => {
    const { name, value } = event.target;
    console.log(`${name} ${value}`);
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { title } = this.state;
    return (
      <form>
        <label>
          Título
          <input type="text" name="title" value={title} onChange={this.handleInput} />
        </label>
      </form>
    );
  }
}

export default AddMovie;
