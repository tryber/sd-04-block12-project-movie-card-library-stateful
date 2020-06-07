import React from "react";

class FormIncludesText extends React.Component {
  render() {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label htmlFor="includesText">
        Inclui o texto:
        <input
          type="text"
          name="includesText"
          id="includesText"
          value={searchText}
          onChange={onSearchTextChange}
        />
      </label>
    );
  }
}

export default FormIncludesText;
