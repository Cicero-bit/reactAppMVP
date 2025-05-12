import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import axios from '../../../services/axios';
import isEmail from 'validator/lib/isEmail';

export default function CompanyRegister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const dispath = useDispatch();

  async function handleSubmit(e) {
    let haserror = false;
    e.preventDefault();
    if (name.length < 3 || name.length > 60) {
      haserror = true;
      toast.warn('O nome deve contenter entre 3 e 60 caracteres');
    }
    if (!isEmail(email)) {
      haserror = true;
      toast.error('Email invalido');
    }
    if (password != confirmPass) {
      haserror = true;
      toast.warn('As duas senhas devem ser iguais');
    }
    if (!haserror) {
      try {
        axios.post('users', {
          name,
          cpf_cnpj: cnpj,
          email,
          password,
          role: 'enterprise',
          enterprisename: name,
        });
      } catch (e) {
        toast.error('Algo deu errado' + e);
        console.log(e);
      }
    } else {
      return;
    }
  }
  return (
    <main className="bg-[url(/src/assets/liongrapes.png)] h-screen bg-cover bg-center p-10">
      <div className="w-2/3 flex flex-row justify-center justify-self-center">
        <section className="bg-[#eee]  pt-5 rounded-lg border-none shadow-lg flex flex-col gap-5 w-1/2 px-10 ">
          <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
            Registre sua conta empresarial
          </h1>
          <h3 className="mb-4 text-gray-500">
            Coloque suas informações empresarias abaixo
          </h3>

          <form
            onSubmit={handleSubmit}
            className="flex-col pb-5 text-start flex gap-4"
          >
            <div className="">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 pb-2"
              >
                Nome da empresa
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                id="name"
                className="border-1 border-solid rounded-lg py-2 border-gray-400 w-full ps-2"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 pb-2"
              >
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                className="border-1 border-solid rounded-lg py-2 border-gray-400 w-full ps-2"
              />
            </div>

            <div>
              <label
                htmlFor="cnpj"
                className="block text-sm font-medium text-gray-700 pb-2"
              >
                CNPJ
              </label>
              <input
                value={cnpj}
                onChange={(e) => setCnpj(e.target.value)}
                type="text"
                id="cnpj"
                className="border-1 border-solid rounded-lg py-2 border-gray-400 w-full ps-2"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 pb-2"
              >
                Senha
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                className="border-1 border-solid rounded-lg py-2 border-gray-400 w-full ps-2"
              ></input>
            </div>

            <div>
              <label
                htmlFor="confirmpassword"
                className="block text-sm font-medium text-gray-700 pb-2"
              >
                Confirme a senha
              </label>
              <input
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
                type="password"
                id="confirmpassword"
                className="border-1 border-solid rounded-lg py-2 border-gray-400 w-full ps-2"
              ></input>
            </div>

            <div className="text-center">
              <button className="border-none rounded-lg p-2 mt-5 bg-blue-600 hover:bg-blue-700 text-white w-full">
                Cadastrar
              </button>
            </div>
          </form>
        </section>
        <section className="bg-blue-900/75 w-1/2 ">
          <div className="flex flex-col text-center pt-10">
            <img
              className="w-3xs place-self-center"
              src="/src/assets/securitychannel.svg"
              alt="Logo da security channel"
            />
            <h1 className="text-2xl font-bold mb-4 text-center text-white mt-10">
              Bem vindo ao Security Channels
            </h1>
            <h3 className="mb-4 text-white">
              Nossa plataforma de contratação de agentes de segurança
            </h3>
            <p className="mb-4 text-white">
              Sistema interno completo para sua empresa organizar e controlar
              todos os seus agentes em tempo real
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
