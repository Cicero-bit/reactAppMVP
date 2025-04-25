import React, { useState } from 'react';
import isEmail from 'validator/lib/isEmail';

import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import * as actions from '../../store/modules/auth/authSlice';
import { useDispatch } from 'react-redux';

export default function Login() {
  const dispath = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let formErr = false;
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!isEmail(email)) {
      formErr = true;
      toast.error('Email invalido!');
    }
    if (password.length < 6 || password.length > 199) {
      formErr = true;
      toast.error('Senha invalida');
    }
    if (formErr) return;

    dispath(actions.LOGIN_REQUEST({ email, password, navigate }));
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Bem vindo de volta!
        </h2>
        <p className="mb-4 text-gray-500">Realize seu login abaixo</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              type="email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Seu@email.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              type="password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Sua senha"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Entrar
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Não tem uma conta?{' '}
          <Link to="/register" className="text-blue-500 hover:underline">
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
}
