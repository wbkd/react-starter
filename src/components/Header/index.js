import React from 'react';
import { Link } from 'react-router-dom';

import './header.styl';

const Header = () =>
  <header className="clearfix">
    webkid react starterkit
    <nav className="clearfix">
      <div className="nav-item">
        <Link to="">Link1</Link>
      </div>
      <div className="nav-item">
        <Link to="">Link2</Link>
      </div>
    </nav>
  </header>;

export default Header;
