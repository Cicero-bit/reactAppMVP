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
import ProfileIndex from '../pages/SearchCompany';
import Channels from '../pages/Enterprises/Channels';
import Team from '../pages/Enterprises/Team';
import Requests from '../pages/Enterprises/Requests';


export default function main() {
  return (
    <Routes>
      <Route index element={<Index />} />
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route path="" element={<Resume />} />
        <Route path="contatos" element={<Securitys />} />
        <Route path="channels" element={<Channels />} />
        <Route path="equipe" element={<Team />} />
        <Route path="solicitacoes" element={<Requests />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/empresas" element={<EnterpriseRegister />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/contato" element={<Contact />} />
      <Route element={<AuthRoute />}>
        <Route path="profile" element={<Profile />}>
          <Route index element={<ProfileIndex />} />
        </Route>
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
