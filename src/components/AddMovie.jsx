// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange(e, name) {
    const { value } = e.target;
    this.setState(() => ({
      [name]: value,
    }));
  }

  handleSubmit() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(() => ({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }));
  }

  render() {
    return (
      <form>
        <label htmlFor="10">
          Título
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={(e) => this.handleChange(e, 'title')}
          />
        </label>
        <button onClick={() => this.handleSubmit(this.state)} >Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
