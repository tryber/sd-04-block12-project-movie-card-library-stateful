import React from 'react';

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.inputs = this.inputs.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  changes(event, value) {
    console.log(event.target.name)
    console.log(event.parentNode)
  }

  inputs(type, label, value) {
    if (type === 'textarea') return (
      <label htmlFor={value}>
        Sinopse<textarea onChange={this.changes} value={value} /></label>
    )
    if (label === 'Gênero') return (
      <label htmlFor="genre">Gênero<select
        value={value}
        onChange={this.changes}
      >
        <option value="action">Ação</option>
        <option value="comedy">Comédia</option><option value="thriller">Suspense</option>
      </select></label>
    )
    return (
      <div>
        <label htmlFor={value}>
          {label}<input type={type} onChange={this.changes} value={value} /></label>
      </div>
    )
  }

  render() {

    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form>
        {this.inputs('text', 'Título', title)}
        {this.inputs('text', 'Subtítulo', subtitle)}
        {this.inputs('text', 'Image', imagePath)}
        {this.inputs('textarea', 'Sinopse', storyline)}
        {this.inputs('number', 'Avaliação', rating)}
        {this.inputs('text', 'Gênero', genre)}

        <button type="submit">Adicionar filme</button>

      </form >
    )
  }
}

      // <div>
      //   <form>
      //     <label htmlFor="title">
      //       Título<input type="text" onChange={this.changes} value={title} /></label>
      //     <label htmlFor="subtitle">
      //       Subtítulo<input type="text" onChange={this.changes} value={subtitle} /></label>
      //     <label htmlFor="image">
      //       Imagem<input type="text" onChange={this.changes} value={imagePath} /></label>
      //     <label htmlFor="story">
      //       Sinopse<textarea onChange={this.changes} value={storyline} /></label>
      //     <label htmlFor="rate">
      //       Avaliação<input type="number" onChange={this.changes} value={rating} /></label>
      //     <label htmlFor="genre">Gênero<select
      //       value={genre}
      //       onChange={this.changes}
      //     >
      //       <option value="action">Ação</option>
      //       <option value="comedy">Comédia</option><option value="thriller">Suspense</option>
      //     </select></label>
      //     <button type="submit">Adicionar filme</button>
      //   </form>
      // </div >
