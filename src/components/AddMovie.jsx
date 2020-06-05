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

  onChangeHandle({ target: { value } }, name) {
    this.setState({ [name]: name === 'rating' ? Number(value) : value });
  }

  onClickHandle() {
    this.props.onClick(this.state);
    this.setState(initialState);
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating } = this.state;
    const allInputs = [
      ['Título', 'title', 'text', 'input', title],
      ['Subtítulo', 'subtitle', 'text', 'input', subtitle],
      ['Imagem', 'imagePath', 'text', 'input', imagePath],
      ['Sinopse', 'storyline', 'text', 'textarea', storyline],
      ['Avaliação', 'rating', 'number', 'input', rating],
    ];
    return (
      <form>
        {allInputs.map((e) => (
          <Input
            label={e[0]}
            name={e[1]}
            type={e[2]}
            Tag={e[3]}
            value={e[4]}
            onChange={this.onChangeHandle}
          />
        ))}
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
