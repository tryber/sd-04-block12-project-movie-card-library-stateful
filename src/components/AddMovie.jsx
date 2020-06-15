import React from 'react';

const Input = (label, name, type, value, onChange) => (
  <label htmlFor={name}>{label}
    <input name={name} type={type} onChange={(e) => onChange(e, name)} value={value} />
  </label>
);
const genreOptions = [
  { text: 'Ação', value: 'action' },
  { text: 'Comédia', value: 'comedy' },
  { text: 'Suspense', value: 'thriller' },
];
const Select = (name, value, onChange) => (
  <label htmlFor={name}>
    Gênero
    <select name={name} value={value} onChange={(e) => onChange(e, name)}>
      {genreOptions.map((option) =>
        <option key={option.value} value={option.value}>{option.text}</option>,
      )}
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
class AddMovie extends React.Component {
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
    return (
      <form onSubmit={(e) => e.preventDefault()}>
        {Input('Título', 'title', 'text', this.state.title, this.changeState)}
        {Input('Subtítulo', 'subtitle', 'text', this.state.subtitle, this.changeState)}
        {Input('Imagem', 'imagePath', 'text', this.state.imagePath, this.changeState)}
        {Input('Sinopse', 'storyline', 'textarea', this.state.storyline, this.changeState)}
        {Input('Avaliação', 'rating', 'number', this.state.rating, this.changeState)}
        {Select('Gênero', this.state.genre, this.changeState)}
        <button type="submit" onClick={() => this.handleButton(this.state)} >Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
