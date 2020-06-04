import React from 'react';

class Search extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <div>
        <label htmlFor="search">Inclui o texto:</label>
        <input
          type="text"
          name="search"
          value={searchText}
          onChange={onSearchTextChange}
        />
      </div>
    );
  }
}
export default Search;
