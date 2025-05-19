import React, { useEffect, useState } from 'react';
import { Outlet } from "react-router";
import axios from '../../services/axios';
import logo from "../../assets/securitychannel.svg"
import SearchCompany from "./SearchCompany";

import { Bell, RadioTower, Folder, CircleUserRound, Building2 } from 'lucide-react';
import Footer from '../../components/Footer';


  const itensNav = [
    { 
      id: "company",
      img: <Building2 />,
      nome: "Empresas",
      content: <SearchCompany />
    },
    {
      id: "notification",
      img: <Bell />,
      nome: "Notificações",
      content: ""
    },
    {
      id: "channel",
      img: <RadioTower />,
      nome: "Channels",
      content: ""
    },
    {
      id: "contracts",
      img: <Folder />,
      nome: "Contratos",
      content: ''
    },
    {
      id: "profile",
      img: <CircleUserRound />,
      nome: "Perfil",
      content: ''
    }
  ]
  
  export default function Painel() {
  const [page, setPage] = useState("company");

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
    <div className='bg-gray-200 flex flex-col items-center'>
      <header className='bg-(--color-primary) w-screen'>
        <section className='mx-auto w-7/10 px-10 py-2 gap-10 flex justify-between'>
          
          <div className='flex  justify-center w-200 items-center gap-10'>
          <img className="h-10"  src={logo} alt="Logo da security channels" />
            <input type='search' className='h-10 w-100 bg-blue-100 px-5'placeholder='Busque novas empresas!'></input>
          </div>
          <div className='flex  justify-around w-2/3 items-end'>
            {itensNav.map((item) => 
              (   
                  <button
                    className={`w-25 h-20 rounded-lg ${item.id === page? 'shadow-xl border-2' : ''}`}
                    onClick={() => {setPage(item.id)}}
                  >
                    <div className='flex-col justify-items-center'>
                      {item.img}
                      <p>{item.nome}</p>
                    </div>
                  </button>
              )  
            )}

          </div>
        </section>
      </header>
      
      <main className='py-5 w-8/10'>
        <h1 className='text-3xl text-center mb-4'>{itensNav.find((item) => item.id === page)?.nome}</h1>
        {itensNav.find((item) => item.id === page)?.content}
      </main>

    </div>
  )
}
