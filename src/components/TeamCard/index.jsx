import { User, Pencil } from 'lucide-react';
import Banner from '../../assets/banner.jpg';

export default function TeamCard({nome, status}){
    const statusResponse = status? "Ativo" : "Inativo"

    return (
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
                <p>{nome}</p>
              </div>

              <div className="flex place-content-between">
                <h1 className="font-semibold ">Status</h1>
                <p>{statusResponse}</p>
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
    )
}