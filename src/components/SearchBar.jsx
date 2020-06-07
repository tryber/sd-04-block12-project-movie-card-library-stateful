import React, { Component } from 'react';


export default class SearchBar extends Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <div>
        <form>
          <label>
            Inclui o texto:
            <input type="text" value={searchText} onChange={onSearchTextChange} />
          </label>
        </form>
      </div>
    );
  }
}
