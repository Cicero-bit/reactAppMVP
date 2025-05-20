import { PersonStanding } from 'lucide-react';

export default function RequestCard({competences}){
    return (
            <div className='flex gap-10'>
      <div className='bg-white w-5/9 h-100'>
        <h1 className='text-center'>Requisições</h1>
        <div className='grid grid-cols-4 m-5 gap-5'>
    
          <div className='bg-gray-300 w-50 h-70 flex flex-col place-content-start items-center gap-5 rounded-lg'>
            <div className='w-full h-15 flex place-content-center items-end bg-blue-700 rounded-t-lg relative'>
            </div>
            <PersonStanding size={40} className='absolute mt-5 w-15 h-15 bg-amber-700 rounded-full' />
            <h1 className='font-bold text-lg'>Skibidi</h1>
            <p className='font-semibold'>Helow</p>
            <ul className='h-25 flex flex-wrap gap-2 place-content-center'>
              {competences.map((i) => {
                return <li className='text-sm bg-blue-400 rounded-lg px-0.5'>{i}</li>
              })}

            </ul>
          </div> 

        </div>
      </div>
      <div className='bg-white w-1/3'>
        hi
      </div>
    </div>
    )
}