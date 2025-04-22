import React, { useEffect, useState } from 'react';
import axios from '../../services/axios';

export default function Profile() {
  const [security, setSecurity] = useState(0);

  useEffect(() => {
    async function getProfile() {
      try {
        const response = await axios.get(`/security/0`);
        console.log(response);
        return setSecurity(response);
      } catch (e) {
        console.log(e);
      }
    }
    getProfile();
  });
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Meu Perfil
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nome
            </label>
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full border rounded-md px-3 py-2 text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              type="email"
              placeholder="seu@email.com"
              className="w-full border rounded-md px-3 py-2 text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Serviço
            </label>
            <input
              type="text"
              placeholder="Tipo serviço"
              className="w-full border rounded-md px-3 py-2 text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
              readOnly
            />
          </div>

          <div className="pt-4">
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition">
              Editar Perfil
            </button>
          </div>

          <div className="text-center pt-2">
            <button className="text-red-500 hover:underline text-sm">
              Sair da conta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
