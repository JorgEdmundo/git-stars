import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Page404 from '../Pages/Page404/Page404';
import Repositories from '../Pages/Repositories/Repositories';
import Starred from '../Pages/Starred/Starred';

function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Repositories />} />
        <Route path="starred" element={<Starred />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default MainRoutes;
