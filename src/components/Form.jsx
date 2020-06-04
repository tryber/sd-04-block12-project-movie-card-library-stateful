import React from 'react';

class Form extends React.Component {
  render() {
    const { searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre, onSelectedGenreChange, } = this.props;

    return (
      <form>
        <div>
          <label htmlFor="search">Inclui o texto:</label>
          <input type="text" name="search" value={searchText} onChange={onSearchTextChange}/>
        </div>
        <div>
          <label htmlFor="checkbox">Mostrar somente favoritos</label>
          <input type="checkbox" name="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange}
          />
        </div>
        <div>
          <label htmlFor="gender">Filtrar por gênero</label>
          <select name="gender" value={selectedGenre} onChange={onSelectedGenreChange}
          >
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </div>
      </form>
    );
  }
}
export default Form;
