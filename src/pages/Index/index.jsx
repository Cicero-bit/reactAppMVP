import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router';
import banner from '../../assets/banner2.png';
import Typewriter from '../../components/Typewriter';

export default function Index() {
  return (
    <>
      <Header />
      <main className="flex flex-col ">
        <section
          className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundColor: 'white',
          }}
        >
          <div className="absolute inset-0 bg-opacity-50 z-0" />{' '}
          <div className="relative z-10 text-center text-white p-4">
            <p className="md:text-2xl max-w-x1 space-x-4 mx-auto flex">
              <span className="text-4xl md:text-6xl font-bold mb-4">
                Bem-vindo à{' '}
              </span>
              <span className="text-blue-400 text-6xl">Security Channels</span>
            </p>
            <div className="text-lg flex items-center justify-self-center space-x-1">
              <span className="text-xl font-semibold">Conectando</span>
              <Typewriter />
              <span className="text-xl font-semibold">
                com a área de segurança de modo fácil.
              </span>
            </div>
            <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg transition duration-300"
              >
                Quero Trabalhar
              </Link>
              <Link
                to="/empresas"
                className="px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white font-semibold rounded-lg transition duration-300"
              >
                Contratar Seguranças
              </Link>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto py-24 px-6 grid md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Vantagens para Empresas
            </h2>
            <ul className="list-disc list-inside space-y-4 text-gray-600">
              <li>Cadastro rápido e intuitivo</li>
              <li>Acesso a uma rede verificada de profissionais</li>
              <li>Filtros avançados para encontrar o candidato ideal</li>
              <li>Suporte especializado para pequenos e grandes eventos</li>
              <li>Sistema de controle empresarial completo</li>
            </ul>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Vantagens para Profissionais
            </h2>
            <ul className="list-disc list-inside space-y-4 text-gray-600">
              <li>Facilidade de cadastro e busca de vagas</li>
              <li>Visibilidade para empresas de renome</li>
              <li>Atualizações em tempo real de oportunidades</li>
              <li>Controle total do seu perfil profissional</li>
              <li>Ofertas de trabalho automatizadas</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
