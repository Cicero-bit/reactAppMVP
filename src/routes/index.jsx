import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';

import AuthRoute from './util/AuthRequired';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import Securitys from '../pages/Securitys';
import Register from '../pages/Register';
import Profile from '../pages/Profile';
import Index from '../pages/Index';

export default function main() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Index />} />
      <Route element={<AuthRoute />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/securitys" element={<Securitys />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
