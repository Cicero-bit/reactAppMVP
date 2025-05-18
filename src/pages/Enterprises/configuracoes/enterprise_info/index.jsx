import React from 'react';

export default function EnterpriseInfo() {
  return (
    <section>
      <form className="space-y-4">
        <div>
          <label
            htmlFor="banner"
            className="block text-sm font-medium text-gray-700"
          >
            Banner
          </label>
          <input
            type="file"
            id="banner"
            name="banner"
            className="mt-1 block w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
            placeholder="ID do arquivo do banner"
          />
        </div>

        <div>
          <label
            htmlFor="adminUser"
            className="block text-sm font-medium text-gray-700"
          >
            Nome do Representante
          </label>
          <input
            type="text"
            id="adminUser"
            name="userName"
            className="mt-1 block w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
            placeholder="Nome do representante"
          />
        </div>

        <div>
          <label
            htmlFor="bio"
            className="block text-sm font-medium text-gray-700"
          >
            Biografia
          </label>
          <textarea
            id="bio"
            name="bio"
            rows={4}
            className="mt-1 block w-full rounded-lg border border-gray-300 p-2 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
            placeholder="Descreva sua empresa..."
          ></textarea>
        </div>

        <div>
          <label
            htmlFor="banner"
            className="block text-sm font-medium text-gray-700"
          >
            Status da conta
          </label>
          <div className="bg-red-500">Não ativa</div>
        </div>

        <div className="text-end">
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-lg shadow hover:bg-gray-900 transition"
          >
            Alterar dados
          </button>
        </div>
      </form>
    </section>
  );
}
