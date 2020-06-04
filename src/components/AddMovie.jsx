// implement AddMovie component here
import React, { Component } from 'react';
import input from './inputs';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '', title: '',
      imagePath: '', storyline: '',
      rating: 0, genre: 'action',
    };
    this.ChangeState = this.ChangeState.bind(this);
  }

  ChangeState(event) {
    console.log(event.target)
    const { name, value} = event.target;
    this.setState(() => ({
      [name]: value,
    }));
  }

  Clear() {
    this.setState(() => ({
      subtitle: '', title: '',
      imagePath: '', storyline: '',
      rating: 0, genre: 'action',
    }))
  }

  render() {
    const { onClick } = this.props;
    return (
      <div>
        <form action="" method="post" enctype="multipart/form-data">
          <inputs name='title' type='text' value={this.state.title} onChange={this.ChangeState} />
          <inputs name='subtitle' type='text' value={this.state.subtitle} onChange={this.ChangeState} />
          <inputs name='imagePath' type='text' value={this.state.imagePath} onChange={this.ChangeState} />
          <label htmlFor='storyline'>Sinopse
            <textarea type='text' name='storyline' value='this.state.storyline' onChange={this.ChangeState} />
          </label>
          <inputs name='rating' type='rating' value={this.state.rating} onChange={this.ChangeState} />
          <label htmlFor='genre'>Gênero
            <select name='genre' value={this.state.genre} onChange={this.ChangeState}>
              <option value='action'>Ação</option>
              <option value='comedy'>Comédia</option>
              <option value='thriller'>Suspense</option>
            </select>
          </label>
          <button onChange={() => onClick(this.state);
             this.Clear()}>Adicionar filme
          </button>
        </form>
      </div>
    );
  }
}

export default AddMovie;