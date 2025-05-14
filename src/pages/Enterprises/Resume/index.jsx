import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import locale from '@fullcalendar/core/locales/pt-br';
import { Link } from 'react-router';

export default function Resume() {
  function datehandler(args) {
    console.log(args);
  }

  const headerOptions = {
    start: 'title',
    center: '',
    end: 'today prev,next',
  };

  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 h-full relative z-100 bg-black">
      <div className="absolute justify-self-center self-center">
        <div className='bg-blue-300 px-50 py-30 z-2'>
          Teste
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-6">
        <div className="bg-white shadow-md rounded-lg p-4 h-1/2 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-2">Log de Atividades</h2>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>Rogerin aceitou trabalhar no evento "nome do evento"</li>
            <li>Rogerin te enviou uma mensagem</li>
            <li>O evento skibidi ainda não tem seguranças!</li>
            <li>Sistema patecio!</li>
            <li>O evento skibidi foi adicionado com sucesso!</li>
          </ul>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4 h-1/2">
          <h2 className="text-lg font-semibold mb-2">Atalhos Rápidos</h2>
          <div className="grid grid-cols-2 gap-3">
            <Link className="text-center bg-blue-600 text-white py-2 px-3 rounded hover:bg-blue-700 text-sm">
              Novo Evento
            </Link>
            <Link className="text-center bg-blue-600 text-white py-2 px-3 rounded hover:bg-blue-700 text-sm">
              Adicionar Seguranças
            </Link>
            <Link className="text-center bg-blue-600 text-white py-2 px-3 rounded hover:bg-blue-700 text-sm">
              Iniciar Conversa
            </Link>
            <Link className="text-center bg-blue-600 text-white py-2 px-3 rounded hover:bg-blue-700 text-sm">
              Gerir Evento
            </Link>
          </div>
        </div>
      </div>

      <div className="col-span-1 lg:col-span-2 bg-white rounded-lg shadow-md p-4">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          dateClick={datehandler}
          locale={locale}
          headerToolbar={headerOptions}
          events={[
            { title: 'suruba', date: '2025-05-10' },
            { title: 'organização da suruba', date: '2025-05-09' },
          ]}
        />
      </div>
    </div>
  );
}
