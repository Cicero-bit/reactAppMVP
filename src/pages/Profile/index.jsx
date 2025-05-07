import React, { useEffect, useState } from 'react';
import { Outlet } from "react-router";
import axios from '../../services/axios';
import logo from "../../assets/securitychannel.svg"

import { Bell, RadioTower, Folder, CircleUserRound } from 'lucide-react';

export default function Profile() {
  const [security, setSecurity] = useState(0);

  useEffect(() => {
    async function getProfile() {
      try {
        const response = await axios.get(`/security/0`);
        console.log(response);
        return setSecurity(response);
      } catch (e) {
        console.log(e);
      }
    }
    getProfile();
  });
  return (
    <div>
      <header className='bg-(--color-primary) w-screen'>
        <section className='mx-auto w-7/10 px-10 py-2 gap-10 flex justify-between'>
          
          <div className='flex  justify-center w-200 items-center gap-10'>
          <img className="h-10"  src={logo} alt="Logo da security channels" />
            <input type='search' className='h-10 w-100 bg-blue-100 px-5'placeholder='Busque novas empresas!'></input>
          </div>
          <div className='flex  justify-around w-1/3 items-end'>
            <div className='flex-col justify-items-center'>
              <Bell  />
              <p>Notificações</p>
            </div>
            <div className='flex-col justify-items-center'>
              <RadioTower  />
              <p>Channels</p>
            </div>
            <div className='flex-col justify-items-center'>
              <Folder  />
              <p>Contratos</p>
            </div>
            <div className='flex-col justify-items-center'>
              <CircleUserRound  />
              <p>Perfil</p>
            </div>

          </div>
        </section>
      </header>
      <main className='bg-gray-200 py-20'>
        <Outlet />
      </main>
    </div>
  )
}
