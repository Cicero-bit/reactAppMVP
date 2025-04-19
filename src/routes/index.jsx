import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';

import AuthRoute from './AuthRequired';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import Securitys from '../pages/Securitys';

export default function main() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/securitys"
        element={<AuthRoute component={Securitys} true />}
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
