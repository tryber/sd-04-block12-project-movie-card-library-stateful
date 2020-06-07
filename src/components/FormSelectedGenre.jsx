import React from "react";

class FormSelectedGenre extends React.Component {
  render() {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label htmlFor="selectedGenre">
        Filtrar por gênero
        <select
          name="selectedGenre"
          id="SelectedGenre"
          value={selectedGenre}
          onChange={onSelectedGenreChange}
        >
          <option value="">Todos</option>
          <option value="action">Ação</option>
          <option value="comedy">Comédia</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

export default FormSelectedGenre;
