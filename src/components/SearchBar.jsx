// implement SearchBar component here
import React from 'react';
import InputComp from './formComponents/InputComp';
import SelectComp from './formComponents/SelectComp';

function SearchBar({
  searchText,
  onSearchTextChange,
  bookmarkedOnly,
  onBookmarkedChange,
  selectedGenre,
  onSelectedGenreChange,
}) {
  return (
    <form>
      <InputComp
        lTx="Inclui o texto:"
        t="text"
        n="Search"
        v={searchText}
        pH="Insert your search"
        oC={onSearchTextChange}
      />
      <InputComp
        lTx="Mostrar somente favoritos:"
        t="checkbox"
        n="Favs"
        c={bookmarkedOnly}
        oC={onBookmarkedChange}
      />
      <SelectComp
        lTx="Filtrar por gênero:"
        n="Genre"
        opt="1"
        v={selectedGenre}
        oC={onSelectedGenreChange}
      />
    </form>
  );
}

export default SearchBar;
