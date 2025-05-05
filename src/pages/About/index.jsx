import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <>
      <Header />
      <section className="bg-gray-50 text-gray-800 py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto bg-white p-10 rounded-2xl shadow-md">
          <p className="text-blue-800  font-semibold mb-2">Sobre Nós</p>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">
                Transformando segurança com tecnlogia, agilidade e confiança
              </h2>
              <p className="mb-4 text-gray-600">
                Security Channel é focada em conectar profissionais de segurança
                com empresas que precisam de serviços confiáveis em eventos e
                festas. Usamos tecnologia para tornar o processo mais rápido e
                eficaz.
              </p>
              <p className="text-gray-600">
                Nosso objetivo é otimizar sua experiência com profissionais
                verificados e confiáveis, entregando proteção com eficiência.
              </p>
            </div>

            <div className="flex-1">
              <div className="w-full h-64 bg-gray-200 rounded-xl" />
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 text-center gap-6">
            <div>
              <p className="text-3xl font-bold text-blue-800">24k+</p>
              <p className="text-gray-600">Seguranças registrados</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-800">80%</p>
              <p className="text-gray-600">
                Redução no tempo de contratação e organização
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-800">10/10</p>
              <p className="text-gray-600">Índice de satisfação de empresas</p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-20 text-center">
          <p className="text-blue-800 font-semibold mb-2">
            Porque nos escolher
          </p>
          <h3 className="text-3xl font-bold mb-6">
            Nossa estratégia é personalizada para suas necessidades
          </h3>
          <p className="max-w-2xl mx-auto text-gray-600 mb-12">
            Oferecemos soluções que se adaptam tanto às empresas quanto aos
            profissionais. Nossa plataforma simplifica a conexão e contratação
            de seguranças qualificados para diversos tipos de eventos em apenas
            um clique.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-4" />
              <h4 className="text-xl font-bold mb-2">
                Benefícios para Empresas
              </h4>
              <p className="text-gray-600">
                Acesso rápido a profissionais confiáveis, com filtros
                personalizados e histórico verificado.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-4" />
              <h4 className="text-xl font-bold mb-2">Eficiência</h4>
              <p className="text-gray-600">
                Sistema de busca otimizado, com notificações automáticas e
                feedback imediato de contratação.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-4" />
              <h4 className="text-xl font-bold mb-2">
                Benefícios para Seguranças
              </h4>
              <p className="text-gray-600">
                Visibilidade para empresas, gestão de disponibilidade e
                avaliações que fortalecem sua reputação.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-20 text-center">
          <p className="text-blue-800 font-semibold mb-2">Nossa Equipe</p>
          <h3 className="text-3xl font-bold mb-6">
            Somos uma empresa empresarial
          </h3>
          <p className="max-w-2xl mx-auto text-gray-600 mb-12">
            Nossa equipe está sempre buscando evoluir em todos os ambitos
            tecnologicos
          </p>

          <div className="grid md:grid-cols-2 gap-8 justify-self-center">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 justify-self-center" />
              <h4 className="text-xl font-bold mb-2">Cicero Duelis</h4>
              <p className="text-blue-800">Founder do SecurityChannel</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 justify-self-center" />
              <h4 className="text-xl font-bold mb-2">Lorenzo Ribeiro</h4>
              <p className="text-blue-800">Founder do SecurityChannel</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
