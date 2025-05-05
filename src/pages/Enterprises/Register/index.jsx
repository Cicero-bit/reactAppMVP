import React from 'react';
import { Outlet } from 'react-router';

export default function CompanyRegister() {
  return (
    <main className="bg-[url(/src/assets/liongrapes.png)] h-screen bg-cover bg-center p-10">
      <div className="w-2/3 flex flex-row justify-center justify-self-center">
        <section className="bg-[#eee]  pt-5 rounded-lg border-none shadow-lg flex flex-col gap-5 w-1/2 px-10 ">
          <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
            Registre sua conta empresarial
          </h1>
          <h3 className="mb-4 text-gray-500">
            Coloque suas informações pessoais abaixo
          </h3>

          <form className="flex-col pb-5 text-start flex gap-4">
            <div className="">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nome da empresa
              </label>
              <input
                type="text"
                id="name"
                className="border-1 border-solid rounded-lg py-2 border-gray-400 w-full ps-2"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border-1 border-solid rounded-lg py-2 border-gray-400 w-full ps-2"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Senha
              </label>
              <input
                type="password"
                id="password"
                className="border-1 border-solid rounded-lg py-2 border-gray-400 w-full ps-2"
              ></input>
            </div>

            <div>
              <label
                htmlFor="confirmpassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirme a senha
              </label>
              <input
                type="password"
                id="confirmpassword"
                className="border-1 border-solid rounded-lg py-2 border-gray-400 w-full ps-2"
              ></input>
            </div>

            <div className="text-center">
              <button className="border-none rounded-lg p-2 mt-5 bg-blue-700 hover:bg-blue-800 text-white w-full">
                Submit
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
