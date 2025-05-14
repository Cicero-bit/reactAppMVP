import React from 'react';
import { User, Pencil } from 'lucide-react';
import Banner from '../../../assets/banner.jpg';

export default function Team() {
  return (
    <section className="flex flex-col gap-10">
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

      <div className="grid xl:grid-cols-4 gap-10">
        <div className="flex flex-1">
          <div className="bg-white w-100 px-10 py-5 flex flex-col gap-5 shadow-md rounded-lg ">
            <div
              className="bg-cover h-40 shrink"
              style={{
                backgroundImage: `url(${Banner})`,
              }}
            ></div>

            <div className="flex flex-col gap-2">
              <div className="flex place-content-between">
                <h1 className="font-semibold ">Nome do Time</h1>
                <p>Time bom</p>
              </div>

              <div className="flex place-content-between">
                <h1 className="font-semibold ">Status</h1>
                <p>Ativo</p>
              </div>

              <div className="flex place-content-between">
                <h1 className="font-semibold ">Membros do grupo</h1>
                <button className="flex gap-1 place-items-end justify-center">
                  <p>10</p>
                  <User></User>
                </button>
              </div>

              <div className="flex place-content-between">
                <h2 className="bg-yellow-400 border-2 border-yelow-600 text-yellow-900 font-bold px-2 rounded-lg">
                  Editar
                </h2>
                <h2 className="bg-red-400 border-2 border-red-500 text-red-900 font-bold px-2">
                  Deletar
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
