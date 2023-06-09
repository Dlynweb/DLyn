import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="navbar__middle">
        <p className="navbar__title">D'Lyn Disfraces</p>
      </div>
      <div className="navbar__right">
          <a href="#footer">
              <FontAwesomeIcon icon={faEnvelope} />
          </a>
      </div>
    </nav>
  );
}

export default Navbar