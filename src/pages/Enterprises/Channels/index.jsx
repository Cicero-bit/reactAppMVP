import React from 'react';
import {
  Pencil,
  Hash,
  ShieldQuestion,
  SmartphoneNfc,
  RadioTower,
  Plus,
} from 'lucide-react';

export default function Channels() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 h-full">
      <aside className="col-span-1 bg-white border-r p-4 space-y-4 shadow-sm rounded-l-2xl">
        <h2 className="text-lg font-semibold mb-2">Canais</h2>
        <nav className="flex flex-col space-y-3">
          <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
            <Pencil className="w-5 h-5" />
            New Chat
          </button>
          <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
            <Hash className="w-5 h-5" />
            Channels
          </button>
          <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
            <RadioTower className="w-5 h-5" />
            Meus Times
          </button>
          <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
            <SmartphoneNfc className="w-5 h-5" />
            Mensagens Diretas
          </button>
          <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
            <ShieldQuestion className="w-5 h-5" />
            Central de Suporte
          </button>
        </nav>
      </aside>

      <main className="col-span-4 p-6 flex flex-col border-r bg-white">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">
          Chat com <span className="text-blue-600">"Nome do Contato"</span>
        </h2>

        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
          <div className="flex items-start">
            <div className="bg-gray-200 text-gray-800 p-3 rounded-lg max-w-md">
              Oi! Tudo bem? Precisamos confirmar os horários do evento.
            </div>
          </div>

          <div className="flex justify-end">
            <div className="bg-blue-500 text-white p-3 rounded-lg max-w-md">
              Opa! Sim, estou disponível a partir das 18h.
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-gray-200 text-gray-800 p-3 rounded-lg max-w-md">
              Perfeito! Te encontro lá então.
            </div>
          </div>
        </div>

        <div className="mt-4 items-center flex bg-gray-200 justify-items-center p-2 w-full pr-8 rounded-lg">
          <input
            type="text"
            placeholder="Digite uma mensagem..."
            className="w-full p-3 outline-none"
          />
          <button className="mr-3 bg-white rounded-full p-1 shadow-md hover:inset-shadow-sm hover:inset-shadow-gray-400">
            <Plus />
          </button>

          <button className="content-center font-bold bg-gray-800 text-white rounded-2xl px-6 h-11">
            Send
          </button>
        </div>
      </main>

      <aside className="col-span-1 p-4 bg-white space-y-4 rounded-r-2xl">
        <h2 className="text-sm text-gray-500 font-semibold mb-2">
          Documentos Recentes
        </h2>
        <div className="space-y-3">
          <div className="flex items-center p-3 border rounded-md shadow-sm hover:bg-gray-50 transition">
            <img
              src="https://via.placeholder.com/40"
              alt="arquivo"
              className="w-10 h-10 object-cover rounded mr-3"
            />
            <div>
              <p className="text-sm font-medium">briefing.pdf</p>
              <p className="text-xs text-gray-500">2 min atrás</p>
            </div>
          </div>
          <div className="flex items-center p-3 border rounded-md shadow-sm hover:bg-gray-50 transition">
            <img
              src="https://via.placeholder.com/40"
              alt="arquivo"
              className="w-10 h-10 object-cover rounded mr-3"
            />
            <div>
              <p className="text-sm font-medium">mapa.png</p>
              <p className="text-xs text-gray-500">15 min atrás</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
