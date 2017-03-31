import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import FaRocket from 'react-icons/lib/fa/rocket';
import './header.styl';

class Header extends PureComponent {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <header className="clearfix">
        <span>webkid react </span>
        <FaRocket />
        <nav className="clearfix">
          <div className="nav-item">
            <Link to="">Link1</Link>
          </div>
          <div className="nav-item">
            <Link to="">Link2</Link>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
