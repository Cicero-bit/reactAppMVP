import { Building2, BluetoothIcon, PenOffIcon } from 'lucide-react';

const companys = [

  {
    nome: "conexões eirelli",
    descricao: "conectamos voce a seu amor",
    imgPerfil: <BluetoothIcon size={40} />
  },
  {
    nome: "Copiadoras 2 irmãos",
    descricao: "Passamos a melhor tática de copiar a matéria",
    imgPerfil: <PenOffIcon size={40} />
  },
    {
    nome: "Copiadoras 2 irmãos",
    descricao: "Passamos a melhor tática de copiar a matéria",
    imgPerfil: <PenOffIcon size={40} />
  },
    {
    nome: "Copiadoras 2 irmãos",
    descricao: "Passamos a melhor tática de copiar a matéria",
    imgPerfil: <PenOffIcon size={40} />
  },
    {
    nome: "Copiadoras 2 irmãos",
    descricao: "Passamos a melhor tática de copiar a matéria",
    imgPerfil: <PenOffIcon size={40} />
  },
];

export default function SearchCompany() {
  return (
    <div className="mx-auto flex gap-20">

      <article className="justify-self-center bg-white rounded-lg w-6/12">
        <div className='flex place-content-between px-5 items-center'>
          <p>Empresas próximas a você</p>
          <button className='p-2'>Exibir mais</button>
        </div>

        <ul className='py-2 grid grid-cols-4 gap-4 px-4'>
          {companys.map((company) => {
            return (
              <li className=''>
                <div className=' w-10/10 h-80 border-2 rounded-xl px-2 py-4 place-self-center flex flex-col place-content-between shadow-lg '>
                  <div className='place-self-center mt-4 border-2 rounded-full w-15 h-15 p-2'>
                    {company.imgPerfil}
                  </div>
                  <div className=''>
                    <h1 className='font-bold text-md'>{company.nome}</h1>
                    <p className='text-sm'>{company.descricao}</p>
                  </div>
                  <button className='bg-blue-300 w-9/10 mt-5 place-self-center rounded-lg border-2 border-zinc-500'>Contactar</button>
                </div>
              </li>
            )
          })}
        </ul>

      </article>

    </div>
  );
}
