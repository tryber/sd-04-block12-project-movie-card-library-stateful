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
    this.setChange = this.setChange.bind(this);
    this.resetBuilder = this.resetBuilder.bind(this);
  }

  // https://bit.ly/3cJhOsq
  setChange(e) {
    e.target.name !== 'rating'
      ? this.setState({ [e.target.name]: e.target.value })
      : this.setState({ [e.target.name]: Number(e.target.value) });
  }
  // https://bit.ly/2UjQzyh
  resetBuilder() {
    this.setState(this.initialState);
  }

  createOption() {
    return (
      <label htmlFor="genre">
        Gênero
        <select name="genre" value={this.state.genre} onChange={this.setChange}>
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
          <label htmlFor="title">Título</label>
          <input id="title" type="text" value={this.state.title} onChange={this.setChange} />
          <label htmlFor="subtitle">Subtítulo</label>
          <input id="subtitle" type="text" value={this.state.subtitle} onChange={this.setChange} />
          <label htmlFor="image">Imagem</label>
          <input id="image" type="text" value={this.state.imagePath} onChange={this.setChange} />
          <label htmlFor="story">Sinopse</label>
          <textarea id="story" type="text" value={this.state.storyline} onChange={this.setChange} />
          <label htmlFor="rating">Avaliação</label>
          <input id="rating" type="number" value={this.state.rating} onChange={this.setChange} />
          {this.createOption()}
          <button onClick={this.resetBuilder(this.state)}>Adicionar filme</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;

// createForm(key, mark, kind) {
//   const styleForm = {
//     width: '100%',
//     border: '1px solid #999',
//     borderRadius: 3,
//     padding: 3,
//     fontSize: 14,
//   };
//   return (
//     <label htmlFor={key}>
//       {mark}
//       <input
//         type={kind}
//         style={styleForm}
//         id={key}
//         value={this.state.key}
//         onChange={this.setChange}
//       />
//     </label>
//   );
// }

// {this.createForm(this.state.title.value, 'Título', 'text')}
// <br />
// {this.createForm(this.state.subtitle, 'Subtítulo', 'text')}
// <br />
// {this.createForm(this.state.imagePath, 'Imagem', 'text')}
// <br />
// {this.createForm(this.state.storyline, 'Sinopse', 'text')}
// <br />
// {this.createForm(this.state.rating, 'Avaliação', 'number')}
// <br />
