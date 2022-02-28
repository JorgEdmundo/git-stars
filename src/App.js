import React from 'react';

import MainRoutes from './routes/MainRoutes';

import Header from './components/Atoms/Header/Header';

const App = () => (
  <>
    <Header />
    <div className="container">
      <MainRoutes />
    </div>
  </>
);

export default App;
