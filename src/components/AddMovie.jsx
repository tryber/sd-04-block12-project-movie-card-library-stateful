import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.changeInput = this.changeInput.bind(this);
    this.changeRating = this.changeRating.bind(this);
  }

  clear() {
    this.setState({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  // o bigodinho azul é o primeiro parâmetro da função
  // this.setState muda o valor do estado
  // quando coloca o {} ele diz que é um objeto e o name entre [] pega o valor de name e
  // coloca como uma chave no objeto e diz que o valor é o Number(value)
  // para isso ele usa : .

  changeRating({ target: { value } }, name) {
    this.setState({ [name]: Number(value) });
  }

  changeInput({ target: { value } }, name) {
    this.setState({ [name]: value });
  }

  createElement(name, text, inputType = 'text', callback = this.changeInput) {
    // const xablau = { xablau: this.state[name] }
    return (
      <label htmlFor={name}>
        {text}
        <input
          type={inputType}
          name={name}
          id={name}
          value={this.state[name]}
          onChange={(event) => callback(event, name)}
        />
      </label>
    );
  }

  textArea(onChange = this.changeInput) {
    const { storyline } = this.state;
    return (
      <label htmlFor="input">
        Sinopse
        <textarea
          value={storyline}
          onChange={(e) => onChange(e, 'storyline')}
        />
      </label>
    );
  }

  selectGenero() {
    const { genre } = this.state;
    return (
      <label htmlFor="genre">
       Gênero
        <select
          type="text"
          id="genre"
          name="genre"
          value={genre}
          onChange={(element) => this.changeInput(element, 'genre')}
        >
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const { onClick } = this.props;

    return (
      <form>
        {this.createElement('title', 'Título')}
        {this.createElement('subtitle', 'Subttítulo')}
        {this.createElement('imagePath', 'Imagem')}
        {this.textArea()}
        {this.createElement('rating', 'Avaliação', 'number', this.changeRating)}
        {this.selectGenero()}
        <buton
          type="button"
          value="Adicionar filme"
          onClick={() => {
            onClick(this.state);
            this.clear();
          }}
        >
          Adicionar filme
        </buton>
      </form>
    );
  }
}
export default AddMovie;
