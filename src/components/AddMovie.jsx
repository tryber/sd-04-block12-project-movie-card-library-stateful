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
        <form action='' method='post' enctype="multipart/form-data">
          <label id='inputOne'>Título</label>
          <input id='inputOne' type='text' name='title' value='this.state.title' onChange={this.ChangeState} />
          <label id='inputTwo'>Subtítulo</label>
          <input id='inputTwo' type='text' name='subtitle' value='this.state.subtitle' onChange={this.ChangeState} />
          <label id='inputThree'>Imagem</label>
          <input id='inputThree' type='text' name='imagePath' value='this.state.imagePath' onChange={this.ChangeState} />
          <label id='inputFour'>Sinopse</label>
          <textarea id='inputFour' type='text' name='storyline' value='this.state.storyline' onChange={this.ChangeState} />
          <label id='inputFive'>Avaliação</label>
          <input id='inputFive' type='number' name='rating' value='this.state.rating' onChange={this.ChangeState} />
          <label id='inputSix'>Gênero</label>
          <select id='inputSix' name='genre' value={this.state.genre} onChange={this.ChangeState}>
          <option value='action'>Ação</option>
          <option value='comedy'>Comédia</option>
          <option value='thriller'>Suspense</option>
        </select>
        <button onChange={this.AddMovie}>Adicionar Filme</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;