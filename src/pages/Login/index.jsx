import React from 'react';

import { Link } from 'react-router';
import * as colors from '../../config/colors';

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              type="email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Seu@email.com"
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
