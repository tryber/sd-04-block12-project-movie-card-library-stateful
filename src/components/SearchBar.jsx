// implement SearchBar component here
import React from 'react';

class SearchBar extends React.Component {

  render() {
    const {
      searchText,
      onSearchTextChange,
    } = this.props;

    return (
      <div>
        <form>
          <label htmlFor="text">Inclui o texto:</label>
          <input type="text" value={searchText} name="text" onChange={onSearchTextChange} />
        </form>
      </div>
    );
  }
}

export default SearchBar;