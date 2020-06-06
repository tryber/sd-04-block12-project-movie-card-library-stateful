// implement SearchBar component here
/*
Crie um componente chamado SearchBar
Esse componente renderizará uma barra com filtros acima da listagem de cartões. Quais cartões serão mostrados no componente MovieList dependerá dos filtros escolhidos. SearchBar deve receber como props:

searchText, uma string
onSearchTextChange, uma callback
bookmarkedOnly, um boolean
onBookmarkedChange, uma callback
selectedGenre, uma string
onSelectedGenreChange, uma callback
*/
import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: String,
    };
  }
  render() {
    //const searchText = this.props.searchText;
    const onSearchTextChange = this.props.onSearchTextChange;
    const bookmarkedOnly = this.props.bookmarkedOnly;
    const selectedGenre = this.props.selectedGenre;
    const onSelectedGenreChange = this.props.onSelectedGenreChange;

    return (
      <div>
        <form>
          <label>
            Inclui o texto: 
            <input type="text"></input>
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;