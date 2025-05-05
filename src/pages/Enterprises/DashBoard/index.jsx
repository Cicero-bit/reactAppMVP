import { useState } from 'react';
import {
  Menu,
  SquareUser,
  Bell,
  HandCoins,
  ChartArea,
  MessageSquare,
  Users,
  Settings,
  Moon,
  LogOut,
} from 'lucide-react';
import { Link, Outlet } from 'react-router';

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`transition-all duration-300 ${
          sidebarOpen ? 'w-64' : 'w-16'
        } bg-white shadow-inset-right flex flex-col justify-between`}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-4">
            <span className="text-lg font-bold">
              {sidebarOpen ? 'Channels' : 'SC'}
            </span>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Menu superior */}
          <div className="px-4 py-4">
            <Section title="Organização" open={sidebarOpen}>
              <MenuItem
                icon={<ChartArea />}
                label="Dashboard"
                sidebarOpen={sidebarOpen}
                to={''}
              />
              <MenuItem
                icon={<SquareUser />}
                label="Seguranças"
                sidebarOpen={sidebarOpen}
                to={'contatos'}
              />
              <MenuItem
                icon={<Users />}
                label="Equipe"
                sidebarOpen={sidebarOpen}
              />
              <MenuItem
                icon={<MessageSquare />}
                label="Conversas"
                sidebarOpen={sidebarOpen}
              />
              <MenuItem
                icon={<Bell />}
                label="Solicitações"
                sidebarOpen={sidebarOpen}
              />
            </Section>

            <Section title="Financeiro" open={sidebarOpen}>
              <MenuItem
                icon={<HandCoins />}
                label="Pagamentos"
                sidebarOpen={sidebarOpen}
              />
            </Section>
          </div>
        </div>

        {/* Menu inferior */}
        <div className="px-4 py-8 space-y-6">
          <Section title="Sistema" open={sidebarOpen}>
            <MenuItem
              icon={<Settings />}
              label="Configurações"
              sidebarOpen={sidebarOpen}
            />
            <div className="flex items-center mt-2 justify-between">
              <div className="flex justify-center">
                <Moon className="w-4 h-4 mr-2" />
                {sidebarOpen && <span className="text-sm">Modo escuro</span>}
              </div>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </Section>

          {/* Perfil e logout */}
          <div>
            <div className="flex items-center space-x-3">
              <img src="" alt="User" className="w-8 h-8 rounded-full" />
              {sidebarOpen && (
                <div>
                  <p className="text-sm font-medium">Cicero</p>
                  <p className="text-xs text-gray-500">Admin Manager</p>
                </div>
              )}
            </div>
            <button className="flex items-center space-x-2 mt-4 text-red-500">
              <LogOut className="w-4 h-4" />
              {sidebarOpen && <span>Sair</span>}
            </button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
}

function Section({ title, children, open }) {
  return (
    <div className="mb-6">
      {open && (
        <h2 className="text-xs font-semibold text-gray-400 uppercase mb-2">
          {title}
        </h2>
      )}
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function MenuItem({ icon, label, sidebarOpen, to }) {
  return (
    <Link to={to}>
      <div className="flex items-center space-x-3 hover:bg-gray-100 p-2 rounded cursor-pointer">
        {icon}
        {sidebarOpen && <span className="text-sm font-medium">{label}</span>}
      </div>
    </Link>
  );
}
