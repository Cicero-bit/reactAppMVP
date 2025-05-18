import TeamCard from '../../../components/TeamCard/index.jsx';
import React from 'react';
import { User, Pencil } from 'lucide-react';

export default function Team() {
  const times = [
    {
      nome: 'helo',
      ativo: true,
    },
    {
      nome: 'amendoim',
      ativo: false,
    },
    {
      nome: 'Salmonela',
      ativo: false,
    },
    {
      nome: 'Tropa de Elite',
      ativo: true,
    },
  ];
  return (
    <section className="flex flex-col gap-10 px-5">
      <div className="flex place-content-between py-3 h-20">
        <h1 className="text-[40px] font-semibold">Times</h1>
        <div className="flex gap-4  px-10 ">
          <p className="bg-white shadow-md rounded-lg px-10 py-4">Alo</p>
          <p className="bg-white shadow-md rounded-lg px-10 py-4">ola</p>
          <p className="bg-white shadow-md rounded-lg px-10 py-4">pewpew</p>
        </div>
      </div>
      <div className="flex place-content-between">
        <div className="flex flex-col gap-2 mx-10 w-1/2">
          <label for="filtrar">Pesquisar por nomes de time</label>
          <div className="flex">
            <div className="bg-white rounded-l-lg px-4 h-10 content-center">
              <Pencil></Pencil>
            </div>
            <input
              type="search"
              id="filtrar"
              className="bg-white w-100 max-w-1/3 h-10 rounded-r-lg px-1"
              placeholder="Pesquise"
            ></input>
          </div>
        </div>
        <div className="mx-10">
          <button className="bg-blue-300 shadow-md rounded-lg py-4 px-10">
            Criar novo time
          </button>
        </div>
      </div>

      <div className="grid gap-10 w-full ">
        <div className="grid grid-cols-4 gap-10">
          {times.map((time) => {
            return <TeamCard nome={time.nome} ativo={time.ativo}></TeamCard>;
          })}
        </div>
      </div>
    </section>
  );
}
