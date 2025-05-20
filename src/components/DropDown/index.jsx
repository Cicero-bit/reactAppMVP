import React, { useEffect, useRef, useState } from 'react';

export default function DropDown({ lista, onSelect, onRemove }) {
  const [visibility, setVisibility] = useState(false);
  const dropdownRef = useRef();
  console.log(lista);
  const areas = [
    'Moto Segurança',
    'Formatura',
    'Residencial',
    'Corporativo',
    'Guarda Costas',
  ];

  function beforeSet(item) {
    if (lista.includes(item)) {
      onRemove(item);
    } else onSelect(item);
  }

  //fica ouvindo clicks na pagina, caso o elemento não estiver dentro da div ref, fecha a div do dropdown
  useEffect(() => {
    //esse codigo roda na montagem
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setVisibility(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    //esse return só ocorre quando o component desmonta
    //esse roda na desmontagem
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); // o [] faz com que ao montar o component ele é chamado 1 vez, como ele tem um mousedown, ele fica se chamando varias vezes

  return (
    <div ref={dropdownRef}>
      <button
        onClick={() => setVisibility(!visibility)}
        id="dropdownHelperButton"
        data-dropdown-toggle="dropdownHelper"
        className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
         focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center justify-between dark:bg-blue-600 dark:hover:bg-blue-700
         dark:focus:ring-blue-800"
        type="button"
      >
        Selecione as áreas{' '}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/*menu em si */}

      {visibility && (
        <div
          id="dropdownHelper"
          className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-full dark:bg-gray-700 dark:divide-gray-600"
        >
          <ul
            className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownHelperButton"
          >
            {areas.map((item) => (
              <li key={item}>
                <div className="z-10 flex p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                  <div className="flex items-center h-5">
                    <input
                      id={`${item}`}
                      checked={lista.includes(item) ? true : false}
                      aria-describedby="helper-checkbox-text-1"
                      type="checkbox"
                      onChange={() => beforeSet(item)}
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                  </div>
                  <div className="ms-2 text-sm">
                    <label
                      htmlFor={item}
                      className="font-medium text-gray-900 dark:text-gray-300"
                    >
                      <div>{item}</div>
                    </label>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
