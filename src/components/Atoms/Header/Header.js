import React, { useContext } from 'react';

import Button from '../Button/Button';

import './header.scss';

function Header() {
  return (
    <div className="header">
      <div className="header-wrap container">
        <h1 onClick={() => setPage('home')} className="title">
          My Movie Picker
        </h1>
        <div className="actions">
          <Button handleClick={() => {}}>Home</Button>
          <Button handleClick={() => {}}>Go to Starred List</Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
