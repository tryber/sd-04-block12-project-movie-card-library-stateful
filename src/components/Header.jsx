import React from 'react';
import './Header.css';

function toggleMenu() {
  const HeaderMenu = document.querySelector('.library-options');
  const LibOptshow = 'library-options Showed';
  const LibOptShowOff = 'library-options notShowed';
  HeaderMenu.className === 'library-options notShowed' ?
    HeaderMenu.className = LibOptshow : HeaderMenu.className = LibOptShowOff;
}

class Header extends React.Component {
  render() {
    const { className } = this.props;
    return (
      <header className={className}>
        <h2>
          <button className="header-menu" onClick={() => toggleMenu()}>
            <div className="menu-icon" />
            <div className="menu-icon" />
            <div className="menu-icon" />
          </button>
        </h2>
        <h1 className="page-title">Movie Cards Library</h1>
      </header>
    );
  }
}

export default Header;
