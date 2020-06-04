// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {

  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
    } = this.props;

    return (
      <div>
        <form>
          <label htmlFor="text">Inclui o texto:</label>
          <input type="text" value={searchText} name="text" onChange={onSearchTextChange} />

          <label htmlFor="favorites">Mostrar somente favoritos</label>
          <input type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        </form>
      </div>
    );
  }
}

export default SearchBar;
