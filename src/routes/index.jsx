import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';

import AuthRoute from './util/AuthRequired';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';
import Register from '../pages/Register';
import Painel from '../pages/Painel';
import Index from '../pages/Index';
import EnterpriseRegister from '../pages/Enterprises/Register';
import About from '../pages/About/index';
import Contact from '../pages/Contact/index';
import DashboardLayout from '../pages/Enterprises/DashBoard';
import Securitys from '../pages/Enterprises/Securitys';
import Resume from '../pages/Enterprises/Resume';
import searchCompany from '../pages/Painel/SearchCompany';
import Channels from '../pages/Enterprises/Channels';
import Team from '../pages/Enterprises/Team';
import Requests from '../pages/Enterprises/Requests';
import Configuracoes from '../pages/Enterprises/configuracoes';

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
        <Route path="configuracoes" element={<Configuracoes />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/empresas" element={<EnterpriseRegister />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/contato" element={<Contact />} />
      <Route element={<AuthRoute />}>
        <Route path="/Painel" element={<Painel />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
