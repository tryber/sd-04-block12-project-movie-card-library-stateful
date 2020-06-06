import React from 'react';

const createPseudoElement = (id, label, value, onChange, type) => (
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

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
    this.changeHandler = this.changeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeHandler(event, id) {
    let val = event.target.value;
    if (id === 'rating') val = Number(val);
    this.setState((state) => ({ ...state, [id]: val }));
  }

  handleSubmit(state) {
    const { onClick } = this.props;
    onClick(state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form onSubmit={(e) => { e.preventDefault(); }}>
        {createPseudoElement('title', 'Título', title, this.changeHandler, 'text')}
        {createPseudoElement('subtitle', 'Subtítulo', subtitle, this.changeHandler, 'text')}
        {createPseudoElement('imagePath', 'Imagem', imagePath, this.changeHandler, 'text')}
        {createTextarea('storyline', 'Sinopse', storyline, this.changeHandler)}
        {createPseudoElement('rating', 'Avaliação', rating, this.changeHandler, 'number')}
        {createSelect('genre', 'Gênero', genre, this.changeHandler)}
        <button onClick={() => this.handleSubmit(this.state)} type="submit">
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
