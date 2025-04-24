import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import isEmail from 'validator/lib/isEmail';
import axios from '../../services/axios';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passowrdConfirm, setpassowrdConfirm] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    let hasErr = false;
    if (name.length < 6 || name.length >= 55) {
      hasErr = true;
      toast.error('O seu nome deve conter entre 6 e 55 characteres');
    }
    if (!isEmail(email)) {
      hasErr = true;
      toast.error('Email invalido');
    }
    if (password.length <= 6) {
      hasErr = true;
      toast.error('Sua senha deve conter mais de 6 characteres');
    }
    if (password !== passowrdConfirm) {
      hasErr = true;
      toast.error('As senhas devem ser iguais');
    }
    if (!hasErr) {
      try {
        await axios({
          method: 'post',
          url: '/users',
          data: {
            name,
            email,
            password,
          },
        }).then((response) => {
          toast.success('Conta registrada com sucesso!');
          navigate(-1);
          console.log(response.data);
        });
      } catch (e) {
        toast.error(`Algo deu errado ${e.response.data.erros}`);
        console.log(e.response.data.erros);
      }
    } else {
      return;
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-200 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Crie sua conta
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="name"
            >
              Nome Completo
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              value={name}
              id="name"
              placeholder="Seu nome completo"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor email"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="password"
            >
              Senha
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Sua melhor senha"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="password"
            >
              Confirme a senha
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              id="passwordConfirm"
              value={passowrdConfirm}
              onChange={(e) => setpassowrdConfirm(e.target.value)}
              placeholder="Repita a senha"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-xl hover:bg-blue-700 transition duration-300"
          >
            Registrar
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Já tenho conta?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
