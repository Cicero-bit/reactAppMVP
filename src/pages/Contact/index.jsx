import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Contatc() {
  return (
    <>
      <Header />
      <div className="min-h-1/3 bg-gradient-to-b from-blue-700 to-gray-900 text-white flex py-10 max-w-7x1">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <h2 className="text-4xl font-bold mb-4">Entre em contato!</h2>
          <p className="text-lg mb-10">Faça um orçamento personalizado</p>
        </div>
      </div>
      <div className="mx-auto w-full max-w-screen-xl p-4 lg:py-8 grid grid-cols-1 lg:grid-cols-2 gap-10 justify-self-center py-20">
        <div>
          <h2 className="text-4xl font-bold mb-4">Nossos meios de contato</h2>
          <p className="text-lg mb-10">Nos acompanhe em todas as redes!</p>

          <ol className="space-y-6">
            <li className="flex items-start gap-4">
              <span className="w-6 h-6 bg-pink-500 rounded-full text-white flex items-center justify-center font-bold">
                1
              </span>
              <div>
                <h3 className="font-bold">contato@securitychannel.com</h3>
                <p className="text-sm text-gray-300">
                  Respondemos emails em dias uteis das 8 - 18 horas
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-6 h-6 bg-pink-500 rounded-full text-white flex items-center justify-center font-bold">
                2
              </span>
              <div>
                <h3 className="font-bold">Linkedin</h3>
                <p className="text-sm text-gray-300">
                  Acompanhe as vagas e os avanços tecnlogicos da nossa empresa!
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-6 h-6 bg-pink-500 rounded-full text-white flex items-center justify-center font-bold">
                3
              </span>
              <div>
                <h3 className="font-bold">Instagram</h3>
                <p className="text-sm text-gray-300">
                  Veja os eventos que estamos presentes
                </p>
              </div>
            </li>
          </ol>
        </div>

        <div className="absolute right-100 -translate-y-1/2 max-w-md bg-white text-black rounded-lg shadow-xl p-6 z-10 opacity-95">
          <h3 className="text-xl font-semibold mb-4">
            Nos descreva a(o) sua(seu) dúvida/pedido que iremos te responder em
            até 24 horas!
          </h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Seu nome"
                className="border p-3 rounded-md w-full"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="border p-3 rounded-md w-full"
              />
            </div>
            <textarea
              placeholder="Detalhes do contato"
              rows="4"
              className="border p-3 rounded-md w-full"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded-md hover:bg-blue-800 transition"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
