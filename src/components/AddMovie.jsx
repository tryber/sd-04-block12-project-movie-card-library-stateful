import React from 'react';

const Input = (label, name, type, value, onChange) => (
  <label htmlFor={name}>{label}
    <input name={name} type={type} onChange={(e) => onChange(e, name)} value={value} />
  </label>
);

const Select = (name, value, onChange) => (
  <label htmlFor={name}>
    Gênero
    <select name={name} value={value} onChange={(e) => onChange(e, name)}>
      <option value="action">Ação</option>
      <option value="comedy">Comédia</option>
      <option value="thriller">Suspense</option>
    </select>
  </label>
);

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};
export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleButton = this.handleButton.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  handleButton(state) {
    const { onClick } = this.props;
    onClick(state);
    this.setState(initialState);
  }

  changeState(e, name) {
    let value = e.target.value;
    if (name === 'rating') value = Number(value);
    this.setState((state) => ({ ...state, [name]: value }));
    console.log(this.state);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form onSubmit={(e) => e.preventDefault()}>
        {Input('Título', 'title', 'text', title, this.changeState)}
        {Input('Subtítulo', 'subtitle', 'text', subtitle, this.changeState)}
        {Input('Imagem', 'imagePath', 'text', imagePath, this.changeState)}
        {Input('Sinopse', 'storyline', 'textarea', storyline, this.changeState)}
        {Input('Avaliação', 'rating', 'number', rating, this.changeState)}
        {Select('Gênero', genre, this.changeState)}
        <button type="submit" onClick={() => this.handleButton(this.state)} >Adicionar filme
        </button>
      </form>
    );
  }
}
