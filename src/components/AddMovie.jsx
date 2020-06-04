// implement AddMovie component here
import React, { Component } from 'react';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '', title: '',
      imagePath: '', storyline: '',
      rating: 0, genre: 'action',
    }
  }

  ChangeState(event) {
    console.log(event.target)
    const { name, value} = event.target;
    this.setState(() => {
      [name]: value;
    })
  }

  AddMovie() {
    console.log(this.state)
    this.props.onClick(this.state)
  }

  render() {
    const { onClick } = this.props;
    return (
      <div>
        <form action="" method="post" enctype="multipart/form-data">
          <label htmlFor='title'>Título
            <input type='text' name='title' value='this.state.title' onChange={this.ChangeState} />
          </label>
          <label htmlFor='subtitle'>Subtítulo
            <input type='text' name='subtitle' value='this.state.subtitle' onChange={this.ChangeState} />
          </label>
          <label htmlFor='imagePath'>Imagem
            <input type='text' name='imagePath' value='this.state.imagePath' onChange={this.ChangeState} />
          </label>
          <label htmlFor='storyline'>Sinopse
            <textarea type='text' name='storyline' value='this.state.storyline' onChange={this.ChangeState} />
          </label>
          <label htmlFor='rating'>Avaliação
            <input type='number' name='rating' value='this.state.rating' onChange={this.ChangeState} />
          </label>
          <label htmlFor='genre'>Gênero
            <select name='genre' value={this.state.genre} onChange={this.ChangeState}>
              <option value='action'>Ação</option>
              <option value='comedy'>Comédia</option>
              <option value='thriller'>Suspense</option>
            </select>
          </label>
          <button onChange={this.AddMovie}>Adicionar Filme</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;