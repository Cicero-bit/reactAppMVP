import React from 'react';
import {
  CheckCircle,
  AlertTriangle,
  MessageCircle,
  UserCheck,
  ShieldAlert,
} from 'lucide-react';

export default function Logger() {
  return (
    <div className="bg-white shadow-sm rounded-lg p-6 h-1/2">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        Log de Atividades
      </h2>

      {/* Grupo que faz scroll */}
      <ul className="space-y-3 overflow-y-auto max-h-80 pr-2">
        <li className="flex items-center gap-3 p-3 border border-gray-200 rounded-md shadow-sm">
          <UserCheck className="text-green-500 w-5 h-5" />
          <span className="text-sm text-gray-700">
            Rogerin aceitou trabalhar no evento{' '}
            <strong>"nome do evento"</strong>
          </span>
          <span className="ml-auto text-xs text-gray-400">há 19 min</span>
        </li>

        <li className="flex items-center gap-3 p-3 border border-gray-200 rounded-md shadow-sm">
          <MessageCircle className="text-blue-500 w-5 h-5" />
          <span className="text-sm text-gray-700">
            Rogerin te enviou uma mensagem
          </span>
          <span className="ml-auto text-xs text-gray-400">há 20 min</span>
        </li>

        <li className="flex items-center gap-3 p-3 border border-gray-200 rounded-md shadow-sm">
          <ShieldAlert className="text-yellow-500 w-5 h-5" />
          <span className="text-sm text-gray-700">
            O evento Skbidi ainda não tem seguranças!
          </span>
          <span className="ml-auto text-xs text-gray-400">há 30 min</span>
        </li>

        <li className="flex items-center gap-3 p-3 border border-gray-200 rounded-md shadow-sm">
          <AlertTriangle className="text-red-500 w-5 h-5" />
          <span className="text-sm text-gray-700">
            Carlão rejeitou o pedido para o evento "Nome evento"!
          </span>
          <span className="ml-auto text-xs text-gray-400">há 2 hrs</span>
        </li>

        <li className="flex items-center gap-3 p-3 border border-gray-200 rounded-md shadow-sm">
          <CheckCircle className="text-green-500 w-5 h-5" />
          <span className="text-sm text-gray-700">
            O evento <strong>Skibidi</strong> foi adicionado com sucesso!
          </span>
          <span className="ml-auto text-xs text-gray-400">há 3 hrs</span>
        </li>

        <li className="flex items-center gap-3 p-3 border border-gray-200 rounded-md shadow-sm">
          <CheckCircle className="text-green-500 w-5 h-5" />
          <span className="text-sm text-gray-700">
            Bem vindo ao SecurityChannels
          </span>
          <span className="ml-auto text-xs text-gray-400">há 3 hrs</span>
        </li>
      </ul>
    </div>
  );
}
