import React from 'react';

import MainRoutes from './routes/MainRoutes';

import './globalStyles/globals.scss';
import Header from './components/Atoms/Header/Header';

const App = () => (
  <>
    <Header />
    <MainRoutes />
  </>
);

export default App;
