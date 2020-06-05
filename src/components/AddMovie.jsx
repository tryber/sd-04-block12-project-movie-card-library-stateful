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

  handleChanges = (id, event) => {
    const { value } = event.target;
    this.setState({ [id]: value });
  };

  render() {
    const { title } = this.state;
    return (
      <form>
        <label>Título</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => this.handleChanges('title', e)}
        />
      </form>
    );
  }
}

export default AddMovie;
