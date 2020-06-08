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
  }
  // https://bit.ly/3cJhOsq
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  // https://bit.ly/2UjQzyh
  resetBuilder(values) {
    this.setState(this.initialState);
  }
  createForm = (key, mark, kind) => {
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
  };
  createOption = () => {
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
  };
  render() {
    return (
      <div>
        <p>
          <small>AddMovie Req: 6-15</small>
        </p>
        <form>
          {this.createForm('title', 'Título', 'text')}
          <br />
          {this.createForm('subTitle', 'Subtítulo', 'text')}
          <br />
          {this.createForm('imagePath', 'Imagem', 'text')}
          <br />
          {this.createForm('storyline', 'Sinopse', 'text')}
          <br />
          {this.createForm('rating', 'Avaliação', 'number')}
          <br />
          {this.createOption('genre', 'Gênero')}
          <br />
          <button onClick={this.resetBuilder(this.state)}>Adicionar Filme</button>
        </form>
      </div>
    );
  }
}

export default AddMovie;

//   title = () => {
//     return (
//       <label htmlFor="title">
//         Título
//         <input
//           type="text"
//           name="title"
//           // style={sytleForm}
//           value={this.state.title}
//           onChange={this.handleChange}
//         />
//       </label>
//     );
//   };

// const { onClick } = this.props;
// const styleForm = { width: '100%' };
// const input = (name, value, onChange) => {
//   <input name={name} value={value} onChange={onChange} />;
// };
// {
/*{this.imagePath()}
          {this.storyline()}
          {this.rating()}
          {this.genre()} */
// }
// {
/* 
          <br />
          <label htmlFor="subtitle">
            Subtítulo
            <input
              type="text"
              name="subtitle"
              //   style={sytleForm}
              value={this.state.subtitle}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label htmlFor="imagePath">
            Imagem
            <input
              type="text"
              name="imagePath"
              //   style={sytleForm}
              value={this.state.imagePath}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label htmlFor="storyline">
            Sinopse
            <textarea
              // type="text"
              name="storyline"
              //   style={sytleForm}
              value={this.state.storyline}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label htmlFor="rating">
            Avaliação
            <input
              type="number"
              name="rating"
              value={this.state.rating}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label htmlFor="genre">
            Gênero
            <select
              name="genre"
              //   style={sytleForm}
              value={this.state.genre}
              onChange={this.handleChange}
            >
              <option value="action">Ação</option>
              <option value="comedy">Comédia</option>
              <option value="thriller">Suspense</option>
            </select>
          </label>
          <br /> */
// }
