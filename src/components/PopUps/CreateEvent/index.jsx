import React, { useState } from 'react';
import { CircleX } from 'lucide-react';
import PopupBase from '../../PopUpBase';
import DropDown from '../../../components/DropDown';

export default function CreateEvent({ closeFunc }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [initDate, setInitDate] = useState(Date.now());
  const [endDate, setEndDate] = useState(Date.now());
  const [description, setDescription] = useState('');
  const [cep, setCep] = useState('');
  const [area, setArea] = useState([]);
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState();
  const [complement, setComplement] = useState('');

  return (
    <PopupBase onCLose={() => closeFunc()}>
      <div className="relative bg-white rounded-xl p-6 shadow-lg h-full w-full items-center">
        <button
          onClick={() => closeFunc()}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
        >
          <CircleX className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Criar Novo Evento
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="event_name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Nome do Evento
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="event_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Nome do evento"
              required
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Categoria
            </label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Ex: Evento Privado"
              required
            />
          </div>

          <div>
            <label
              htmlFor="start_date"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Data Inicio
            </label>
            <input
              type="datetime-local"
              id="start_date"
              value={initDate}
              onChange={(e) => setInitDate(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label
              htmlFor="end_date"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Data Fim
            </label>
            <input
              type="datetime-local"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              id="end_date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="description" className="label block text-sm mb-2">
              Descrição
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="description"
              placeholder="Descrição breve do evento"
              className="input h-24 resize-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            ></textarea>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="area" className="label block text-sm mb-2">
              Área
            </label>
            <DropDown
              lista={area}
              onSelect={(item) => setArea([...area, item])}
              onRemove={(item) => setArea(area.filter((i) => i !== item))}
            ></DropDown>
            <div>{area}</div>
          </div>

          <div>
            <label htmlFor="cep" className="label block text-sm mb-2">
              CEP
            </label>
            <input
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              type="text"
              id="cep"
              placeholder="00000-000"
              className="input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>

          <div>
            <label htmlFor="street" className="label block text-sm mb-2">
              Rua
            </label>
            <input
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              type="text"
              id="street"
              placeholder="Ex: Rua Canoeiros"
              className="input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>

          <div>
            <label htmlFor="city" className="label block text-sm mb-2">
              Cidade
            </label>
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              type="text"
              id="city"
              placeholder="Ex: Vitoria"
              className="input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>

          <div>
            <label htmlFor="number" className="label block text-sm mb-2">
              Numero
            </label>
            <input
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              type="text"
              id="street"
              placeholder="Ex: 32"
              className="input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="complement" className="label block text-sm mb-2">
              Complemento
            </label>
            <textarea
              value={complement}
              onChange={(e) => setComplement(e.target.value)}
              id="complement"
              placeholder="Descrição breve do local"
              className="input h-18 resize-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            ></textarea>
          </div>

          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition"
            >
              Salvar Evento
            </button>
          </div>
        </form>
      </div>
    </PopupBase>
  );
}
