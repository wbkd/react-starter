import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import FaRocket from 'react-icons/lib/fa/rocket';
import './header.styl';

class Header extends PureComponent {

  render() {
    return (
      <header className="header">
        <div className="header__claim">
          <span>webkid react </span>
          <FaRocket />
        </div>
        <nav className="menu">
          <div className="menu__item">
            <Link to="">Link1</Link>
          </div>
          <div className="menu__item">
            <Link to="">Link2</Link>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
