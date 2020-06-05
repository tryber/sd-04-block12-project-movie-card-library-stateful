/* eslint-disable react/destructuring-assignment */
// implement AddMovie component here
import React, { Component } from 'react';
import Inputs from './form/Input';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};


class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.onClickHandle = this.onClickHandle.bind(this);
    this.onChangeHandle = this.onChangeHandle.bind(this);
  }

  onChangeHandle({ target: { value } }, name) {
    this.setState({ [name]: name === 'rating' ? Number(value) : value });
  }

  onClickHandle() {
    this.props.onClick(this.state);
    this.setState(initialState);
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating } = this.state;
    return (
      <form>
        <Inputs label="Título" name="title" type="text" Tag="input" value={title} onChange={this.onChangeHandle} />
        <Inputs label="Subtítulo" name="subtitle" type="text" Tag="input" value={subtitle} onChange={this.onChangeHandle} />
        <Inputs label="Imagem" name="imagePath" type="text" Tag="input" value={imagePath} onChange={this.onChangeHandle} />
        <Inputs label="Sinopse" name="storyline" type="text" Tag="textarea" value={storyline} onChange={this.onChangeHandle} />
        <Inputs label="Avaliação" name="rating" type="number" Tag="input" value={rating} onChange={this.onChangeHandle} />
        <label htmlFor="genre">
          Gênero
          <select name="genre" value={this.state.genre} onChange={(e) => this.onChangeHandle(e, 'genre')}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
        <button type="submit" onClick={this.onClickHandle}>Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
