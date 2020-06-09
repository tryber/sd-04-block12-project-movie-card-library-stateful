// implement AddMovie component here
import React, { Component } from 'react';
import InputComp from './formComponents/InputComp';
import TextAreaComp from './formComponents/TextAreaComp';
import SelectComp from './formComponents/SelectComp';

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
    this.state = { ...initialState };
  }

  changeHandler = (event) => {
    const { name, value } = event.target;
    if (name === 'rating') {
      this.setState((state) => ({ [name]: Number(value) }));
    } else {
      this.setState((state) => ({ [name]: value }));
    }
  };

  stateClear = () => {
    this.setState((state) => ({ ...initialState }));
  };

  render() {
    const { onClick } = this.props;
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form>
        {/* prettier-ignore */}
        <InputComp t="text" lTx="Título" n="title" v={title} oC={this.changeHandler}/>
        {/* prettier-ignore */}
        <InputComp t="text" lTx="Subtítulo" n="subtitle" v={subtitle} oC={this.changeHandler} />
        {/* prettier-ignore */}
        <InputComp t="text" lTx="Imagem" n="imagePath" v={imagePath} oC={this.changeHandler} />
        {/* prettier-ignore */}
        <TextAreaComp lTx="Sinopse" n="storyline" v={storyline} pH="Insira a sinopse" oC={this.changeHandler} />
        {/* prettier-ignore */}
        <InputComp t="number" lTx="Avaliação" n="rating" v={rating} oC={this.changeHandler} />
        {/* prettier-ignore */}
        <SelectComp lTx="Gênero" n="genre" opt="0" v={genre} oC={this.changeHandler} />
        {/* prettier-ignore */}
        <button type="button" onClick={() => {
            onClick(this.state);
            this.stateClear();
          }}
        >Adicionar filme</button>
      </form>
    );
  }
}

export default AddMovie;
