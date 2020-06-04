// implement AddMovie component here
import React from 'react';

const createInput = (id, label, value, onChange, type) => (
  <label htmlFor={id}>
    {label}
    <input id={id} value={value} onChange={(e) => onChange(e, id)} type={type} />
  </label>
);

const createTextarea = (id, label, value, onChange) => (
  <label htmlFor={id}>
    {label}
    <textarea id={id} value={value} onChange={(e) => onChange(e, id)} />
  </label>
);

const createSelect = (id, label, value, onChange) => (
  <label htmlFor={id}>
    {label}
    <select id={id} value={value} onChange={(e) => onChange(e, id)}>
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

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.updateState = this.updateState.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  updateState(event, id) {
    let val = event.target.value;
    if (id === 'rating') val = Number(val)
    this.setState((state) => ({ ...state, [id]: val }));
  }

  handleButton(state) {
    const { onClick } = this.props;
    onClick(state);
    this.setState(initialState);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form onSubmit={(e) => { e.preventDefault(); }}>
        {createInput('title', 'Título', title, this.updateState, 'text')}
        {createInput('subtitle', 'Subtítulo', subtitle, this.updateState, 'text')}
        {createInput('imagePath', 'Imagem', imagePath, this.updateState, 'text')}
        {createTextarea('storyline', 'Sinopse', storyline, this.updateState)}
        {createInput('rating', 'Avaliação', rating, this.updateState, 'number')}
        {createSelect('genre', 'Gênero', genre, this.updateState)}
        <button onClick={() => this.handleButton(this.state)} type="submit">
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
