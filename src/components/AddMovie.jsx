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
      genre: 'action'
    };
  }

  handleChange = event => {
    let { name, value } = event.target;
    this.setState(state => ({
      [name]: value,
    }));
    console.log('test', this.state.title )
  };

  handleSubmit = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(state => ({
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action'
    }));

  };


  render() {
    return (
      <form>
        <label>
        Título
              <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </label>
        <button onClick={() => this.handleSubmit(this.state)} >Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;