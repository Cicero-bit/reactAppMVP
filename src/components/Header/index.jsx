import React from 'react';
import { Link } from 'react-router';
import logo from '../../assets/securitychannel.svg';
import { useSelector } from 'react-redux';

export default function Menu() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link
            to={'/'}
            className="font-bold text-xl text-gray-800 flex gap-2 items-center"
          >
            <img src={logo} alt="Logo" className="h-10 w-auto" />
            Security Channels
          </Link>{' '}
        </div>

        <nav className="flex items-center space-x-8">
          <Link
            to="/register"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Trabalhar
          </Link>
          <Link
            to="/empresas"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Empresas
          </Link>

          <Link
            to="/sobre"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Sobre
          </Link>
          <Link
            to="/contato"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            Contato
          </Link>
          <Link
            to={isLoggedIn ? '/painel' : '/login'}
            className="text-gray-600 hover:text-blue-600 transition"
          >
            {isLoggedIn ? 'Painel' : 'Entrar'}
          </Link>
        </nav>
      </div>
    </header>
  );
}
