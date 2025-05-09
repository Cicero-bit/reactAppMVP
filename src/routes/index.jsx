import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';

import AuthRoute from './util/AuthRequired';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import Register from '../pages/Register';
import Profile from '../pages/Profile';
import Index from '../pages/Index';
import EnterpriseRegister from '../pages/Enterprises/Register';
import About from '../pages/About/index';
import Contact from '../pages/Contact/index';
import DashboardLayout from '../pages/Enterprises/DashBoard';
import Securitys from '../pages/Enterprises/Securitys';
import Resume from '../pages/Enterprises/Resume';
import SearchCompany from '../pages/SearchCompany';

export default function main() {
  return (
    <Routes>
      <Route index element={<Index />} />
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route path="" element={<Resume />} />
        <Route path="contatos" element={<Securitys />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/empresas" element={<EnterpriseRegister />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/contato" element={<Contact />} />
      <Route element={<AuthRoute />}>
        <Route path="profile" element={<Profile />} >
          <Route index element={<SearchCompany />} />
        </Route>

      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
