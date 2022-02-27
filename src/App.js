import React from 'react';
import { render } from 'react-dom';

import RepositoryList from './Pages/RepositoryList/RepositoryList';
import Starred from './Pages/Starred/Starred';

import './globalStyles/globals.scss';

const rootElement = document.getElementById('root');

const App = () => (
  <>
    <p>Git stars</p>
    <RepositoryList />
    {/* <Starred /> */}
  </>
);

render(<App />, rootElement);
