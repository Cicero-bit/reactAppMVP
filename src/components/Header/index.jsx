import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router';
import logo from '../../assets/securitychannel.svg';
import { useSelector } from 'react-redux';
import {
  Info,
  Mail,
  LogIn,
  PanelTop,
  UserPlus,
  Building2,
  Shield,
} from 'lucide-react';

export default function Menu() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const currentUser = useSelector((state) => state.auth.user);
  const [pppVisibility, setPppVisibility] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setPppVisibility(false);
      }
    }

    if (pppVisibility) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [pppVisibility]);

  return (
    <header className="bg-white/95 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        <div className="flex items-center space-x-3">
          <Link
            to="/"
            className="font-bold text-xl text-gray-800 flex gap-2 items-center"
          >
            <img src={logo} alt="Logo" className="h-10 w-auto" />
            Security Channels
          </Link>
        </div>

        <nav className="flex items-center space-x-8 relative">
          <Link
            to="/sobre"
            className="text-gray-600 hover:text-blue-500 transition font-bold flex items-center gap-1"
          >
            <Info className="w-4 h-4" />
            Sobre
          </Link>
          <Link
            to="/contato"
            className="text-gray-600 hover:text-blue-600 transition font-bold flex items-center gap-1"
          >
            <Mail className="w-4 h-4" />
            Contato
          </Link>
          <Link
            to={isLoggedIn ? '/painel' : '/login'}
            className="text-gray-600 hover:text-blue-600 transition font-bold flex items-center gap-1"
          >
            {isLoggedIn ? (
              <>
                <PanelTop className="w-4 h-4" />
                Painel
              </>
            ) : (
              <>
                <LogIn className="w-4 h-4" />
                Entrar
              </>
            )}
          </Link>

          {!isLoggedIn && (
            <div className="relative" ref={dropdownRef}>
              <div
                onClick={() => setPppVisibility(() => !pppVisibility)}
                className="text-gray-600 hover:text-blue-600 transition cursor-pointer flex items-center font-bold gap-1"
              >
                <UserPlus className="w-4 h-4" />
                Cadastre-se
              </div>

              {pppVisibility && (
                <div className="absolute mt-2 bg-white border border-gray-300 rounded shadow-lg w-50 py-2 z-50">
                  <Link
                    to={'/empresas'}
                    onClick={() => setPppVisibility(false)}
                    className="w-full px-4 py-2 text-left text-gray-800 hover:bg-blue-50 hover:text-blue-600 flex items-center gap-2"
                  >
                    <Building2 className="w-4 h-4" />
                    Sou Empresa
                  </Link>
                  <Link
                    to={'/register'}
                    onClick={() => setPppVisibility(false)}
                    className="w-full px-4 py-2 text-left text-gray-800 hover:bg-blue-50 hover:text-blue-600 flex items-center gap-2"
                  >
                    <Shield className="w-4 h-4" />
                    Sou Segurança
                  </Link>
                </div>
              )}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
