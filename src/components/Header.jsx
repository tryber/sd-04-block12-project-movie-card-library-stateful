import React from 'react';
import './Header.css'

class Header extends React.Component {
  funteste() {
    const MAA = document.querySelector('.library-options');
    MAA.className === 'library-options notShowed' ?
      MAA.className = 'library-options Showed' : MAA.className = 'library-options notShowed';
  }
  render() {
    const { className } = this.props;
    return (
      <header className={className}>
        <h2 className="header-menu" onClick={() => this.funteste()}>
          <div className="menu-icon"></div>
          <div className="menu-icon"></div>
          <div className="menu-icon"></div>
        </h2>
        <h1 className="page-title">Movie Cards Library</h1>
      </header>
    );
  }
}

export default Header;
