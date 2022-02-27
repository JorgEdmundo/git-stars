import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button/Button';

import './header.scss';

function Header() {
  return (
    <div className="header">
      <div className="header-wrap container">
        <h1 className="title">
          <Link to="/">Git Stars</Link>
        </h1>
        <div className="actions">
          <Link to="/">
            <Button>Home</Button>
          </Link>

          <Link to="/starred">
            <Button>Go to Starred List</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
