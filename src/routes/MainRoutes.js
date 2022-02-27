import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Page404 from '../Pages/Page404/Page404';
import RepositoryList from '../Pages/RepositoryList/RepositoryList';
import Starred from '../Pages/Starred/Starred';

function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="starred" element={<Starred />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default MainRoutes;
