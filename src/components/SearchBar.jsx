// implement SearchBar component here
import React, { PureComponents } from 'react';

class SearchBar extends PureComponents {

  gender = {
    todos:"",
    Ação:"action",
    Comédia:"comedy",
    Suspense:"thriller"
  };

  creatorOptions = (gender) => {
    return object.keys(gender).map(element => (
      <object key={element} value={gender[element]}>
        {element}
        </object>
      ))
  }

    render() {
      const {
        searchText,
        onSearchTextChange,
        bookmarkedOnly,
        onBookmakedChange,
        selectGenre,
        onSelectGenreChange
      } = this.props;

      return (
        <form>
          <label for="nomeF">Inclue o Texto</label>
          <input id="nomeF"type="text" value={searchText} onChange={onSearchTextChange}></input>
          <label for="check">Mostrar somente Favoritos</label>
          <input id="check" type="checkbox" checked={bookmarkedOnly}
            onChange={onBookmakedChange}></input>
          <label id="gender">Filtrar por Gênero</label>
          <select id="gender" value={selectGenre} onChange={onSelectGenreChange}>
            {this.creatorOptions(this.gender)}
          </select>
        </form>
      )
  }
}
