/* eslint-disable react/destructuring-assignment */
// implement AddMovie component here
import React, { Component } from 'react';
import Input from './form/Input';

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

  onChangeHandle({ target: { value, name } }) {
    this.setState({ [name]: name === 'rating' ? Number(value) : value });
  }

  onClickHandle() {
    this.props.onClick(this.state);
    this.setState(initialState);
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating } = this.state;
    const allInputs = [
      ['Título', 'title', 'text', 'input', title, this.onChangeHandle],
      ['Subtítulo', 'subtitle', 'text', 'input', subtitle, this.onChangeHandle],
      ['Imagem', 'imagePath', 'text', 'input', imagePath, this.onChangeHandle],
      ['Sinopse', 'storyline', 'text', 'textarea', storyline, this.onChangeHandle],
      ['Avaliação', 'rating', 'number', 'input', rating, this.onChangeHandle],
    ];
    return (
      <form>
        {allInputs.map((e) => <Input key={e[1]} data={e} />)}
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
