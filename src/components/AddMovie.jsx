// implement AddMovie component here
import React, { Component } from 'react';

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
    this.state = initialState; // https://bit.ly/2UjQzyh
    this.handleChange = this.handleChange.bind(this);
    this.resetBuilder = this.resetBuilder.bind(this);
    this.createForm = this.createForm.bind(this);
  }
  // https://bit.ly/3cJhOsq
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  // https://bit.ly/2UjQzyh
  resetBuilder() {
    this.setState(this.initialState);
  }
  createForm(key, mark, kind) {
    const styleForm = {
      width: '100%',
      border: '1px solid #999',
      borderRadius: 3,
      padding: 3,
      fontSize: 14,
    };
    return (
      <label htmlFor={key}>
        {mark}
        <input
          type={kind}
          style={styleForm}
          name={key}
          value={this.state.key}
          onChange={this.handleChange}
        />
      </label>
    );
  }
  createOption() {
    return (
      <label htmlFor="genre">
        Gênero
        <select name="genre" value={this.state.genre} onChange={this.handleChange}>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
  render() {
    return (
      <div>
        <p>
          <small>AddMovie Req: 6-15</small>
        </p>
        <form>
          {this.createForm(this.state.title, 'Título', 'text')}
          <br />
          {this.createForm(this.state.subTitle, 'Subtítulo', 'text')}
          <br />
          {this.createForm(this.state.imagePath, 'Imagem', 'text')}
          <br />
          {this.createForm(this.state.storyline, 'Sinopse', 'text')}
          <br />
          {this.createForm(this.state.rating, 'Avaliação', 'number')}
          <br />
          {this.createOption()}
          <br />
          <button onClick={this.resetBuilder(this.state)}>Adicionar Filme</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;
