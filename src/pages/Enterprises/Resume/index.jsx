import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import locale from '@fullcalendar/core/locales/pt-br';
import PopupCreateEvent from '../../../components/PopUps/CreateEvent';
import Logger from '../../../components/Logger';

export default function Resume() {
  const [eventPopUpVisibility, setEventPopupVisibility] = useState(false);
  function datehandler(args) {
    console.log(args);
  }

  const headerOptions = {
    start: 'title',
    center: '',
    end: 'today prev,next',
  };

  return (
    <div className="p-6 grid grid-cols-2 lg:grid-cols-3 gap-6 h-full relative z-100">
      <div className="col-span-1 flex flex-col gap-6">
        <Logger />
        <div className="bg-white shadow-md rounded-lg p-4 h-1/2">
          <h2 className="text-lg font-semibold mb-2">Atalhos Rápidos</h2>
          <div className="grid grid-cols-2 gap-3">
            <button className="text-center bg-blue-600 text-white py-2 px-3 rounded hover:bg-blue-700 text-sm">
              Gerir Eventos
            </button>
            <button
              onClick={() => setEventPopupVisibility(!eventPopUpVisibility)}
              className="text-center bg-blue-600 text-white py-2 px-3 rounded hover:bg-blue-700 text-sm"
            >
              Novo Evento
            </button>
            <button className="text-center bg-blue-600 text-white py-2 px-3 rounded hover:bg-blue-700 text-sm">
              Iniciar Conversa
            </button>
            <button className="text-center bg-blue-600 text-white py-2 px-3 rounded hover:bg-blue-700 text-sm">
              Meus Times
            </button>
          </div>
        </div>
      </div>

      {eventPopUpVisibility && (
        <PopupCreateEvent
          closeFunc={() => setEventPopupVisibility(!eventPopUpVisibility)}
        />
      )}

      <div className="col-span-1 lg:col-span-2 bg-white rounded-lg shadow-md p-4">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          dateClick={datehandler}
          locale={locale}
          headerToolbar={headerOptions}
          events={[
            { title: 'Skibidi', date: '2025-05-10' },
            { title: 'organização da skibidi', date: '2025-05-09' },
          ]}
        />
      </div>
    </div>
  );
}
