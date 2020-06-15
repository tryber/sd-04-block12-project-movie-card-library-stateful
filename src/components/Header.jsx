import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    const { className } = this.props;
    return (
      <header className={className}>
        <h1 className="page-title">Movie Cards Library</h1>
      </header>
    );
  }
}

export default Header;
