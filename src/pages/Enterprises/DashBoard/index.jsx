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
} from 'lucide-react';
import { Link, Outlet, useMatch, useResolvedPath } from 'react-router';
import logo from '../../../assets/securitychannel.svg';

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`transition-all duration-300 ${
          sidebarOpen ? 'w-64' : 'w-16'
        } bg-white shadow-inset-right flex flex-col justify-between `}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-4">
            <img src={logo} className="w-10 h-10" />
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
                to={'equipe'}
              />
              <MenuItem
                icon={<MessageSquare />}
                label="Channels"
                sidebarOpen={sidebarOpen}
                to={'channels'}
              />
              <MenuItem
                icon={<Bell />}
                label="Solicitações"
                sidebarOpen={sidebarOpen}
                to={'solicitacoes'}
              />
            </Section>

            <Section title="Financeiro" open={sidebarOpen}>
              <MenuItem
                icon={<HandCoins />}
                label="Pagamentos"
                sidebarOpen={sidebarOpen}
                to={'pagamentos'}
              />
            </Section>
          </div>
        </div>

        {/* Menu inferior */}

        <div className="px-4 py-8 space-y-4">
          <Section title="Sistema" open={sidebarOpen}>
            <MenuItem
              icon={<Settings />}
              label="Configurações"
              sidebarOpen={sidebarOpen}
              to={'configuracoes'}
            />
          </Section>

          {/* Perfil e logout */}
          <div>
            <div className="flex space-x-3 mt-4">
              <img src="" alt="User" className="w-8 h-8 rounded-full" />
              {sidebarOpen && (
                <div className="flex justify-between items-center w-full">
                  <div>
                    {' '}
                    <p className="text-sm font-bold">Cicero</p>
                    <p className="text-xs text-gray-500">Adiministrador</p>
                  </div>
                  <Moon className="w-5 h-5 mr-1" />
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 bg-gray-100 h-screen overflow-y-auto">
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

function MenuItem({ icon, label, sidebarOpen, to = '' }) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: to === '' });

  const isActive = match;

  return (
    <Link to={to}>
      <div
        className={`${
          isActive ? 'bg-gray-200 text-blue-700 font-medium' : 'bg-white'
        } flex items-center space-x-3 hover:bg-gray-100 p-2 rounded cursor-pointer`}
      >
        {icon}
        {sidebarOpen && <span className="text-sm font-medium">{label}</span>}
      </div>
    </Link>
  );
}
