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

  handleChanges(event) {
    const { name, value } = event.target;
    console.log(event.target.name);
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title } = this.state;

    return (
      <form>
        <label>Título</label>
        <input type="text" name="title" value={title} onChange={this.handleChanges} />
      </form>
    );
  }
}

export default AddMovie;
