import React, { useState } from 'react';
import { Settings, Bell, Shield, Building2 } from 'lucide-react';
import EnterpriseConfig from './enterprise_info';

const menuItems = [
  {
    id: 'enterprise',
    label: 'Informações Empresarial',
    icon: <Building2 size={20} />,
    content: <EnterpriseConfig />,
  },
  { id: 'preferences', label: 'Preferencias', icon: <Settings size={20} /> },
  { id: 'notifications', label: 'Notificações', icon: <Bell size={20} /> },
  { id: 'privacy', label: 'Privacidade', icon: <Shield size={20} /> },
];

export default function Configuracoes() {
  const [selected, setSelected] = useState('enterprise');

  return (
    <div className="bg-gray-100 p-6 min-h-full">
      <div className="bg-white shadow-lg grid grid-cols-1 md:grid-cols-4 overflow-hidden rounded-lg">
        <aside className="bg-white border-r border-gray-200">
          <h2 className="text-[24px] text-gray-700 p-6 border-b-gray-200 border-b-1 font-bold">
            Conta
          </h2>
          {menuItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setSelected(item.id)}
              className={`flex items-center gap-3 px-4 py-3 w-full text-left hover:bg-gray-100 transition
                ${index === menuItems.length - 1 ? '' : 'border-b-1 border-b-gray-200'}
                ${
                  selected === item.id
                    ? 'bg-gray-100 border-l-3 border-black font-semibold inset-shadow-sm inset-shadow-black/10'
                    : 'text-gray-600'
                }`}
            >
              <div
                className={`flex items-center justify-center rounded-3xl shadow-sm size-10 shadow-black/20 ${selected === item.id ? 'bg-black text-white' : 'bg-white'}`}
              >
                {item.icon}
              </div>
              <span>{item.label}</span>
            </button>
          ))}
        </aside>

        <section className="col-span-3 p-8">
          <h1 className="text-xl font-bold mb-4 capitalize">
            {menuItems.find((item) => item.id === selected)?.label}
          </h1>
          <div className="text-gray-600">
            <section className="p-4">
              {menuItems.find((item) => item.id === selected)?.content}
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}
