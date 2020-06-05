// implement AddMovie component here
import React from 'react';

class AddMovie extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        subtitle: '',
        title: '',
        imagePath: '',
        storyline: '',
        rating: 0,
        genre: 'action',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
}

handleInput(state) {
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

handleInputChange (event, name) {
    let value = event.target.value;
    if (name === 'rating') value = Number(value);
    this.setState((state) => ({
        ...state, 
        [name]: value,
    })
    );
}


render() {
    return (
        <div>
            <form onSubmit={(e) => { e.preventDefault(); }}>
                <label>Título</label>
                <input name="title" value='' type="text" onChange={(e) => this.handleInputChange(e, 'title')} /><br />
                <label>Subtítulo</label>
                <input name="subtitle" value={this.state.subtitle} type="text" onChange={(e) => this.handleInputChange(e, 'subtitle')} /><br />
                <label>Imagem</label>
                <input name="imagePath" value={this.state.imagePath} type="text" onChange={(e) => this.handleInputChange(e, 'imagePath')} /><br />
                <label>Sinopse</label>
                <textarea name="storyline" value={this.state.storyline} type="text" onChange={(e) => this.handleInputChange(e, 'storyline')} /><br />
                <label>Avaliação</label>
                <input name="rating" value={this.state.rating} type="number" onChange={(e) => this.handleInputChange(e, 'rating')} /><br />
                <label>Gênero</label>
                <select name="genre" value={this.state.genre} onChange={(e) => this.handleInputChange(e, 'genre')}>
                    <option value="action">Ação</option>
                    <option value="comedy">Comédia</option>
                    <option value="thriller">Suspense</option>
                </select><br />
                <button onClick={() => this.handleInput(this.state)} type="submit">Adicionar filme</button>
            </form>
        </div>
    );
}
}

export default AddMovie;