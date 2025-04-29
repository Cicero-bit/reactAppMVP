import React from 'react';

export default function SecurityCardSkeleton() {
  return (
    <div className="w-[20rem] p-4 bg-white rounded-xl shadow-md animate-pulse flex flex-col items-center gap-4 m-4">
      {/* Círculo para a foto */}
      <div className="w-24 h-24 bg-gray-300 rounded-full" />

      {/* Retângulo para o nome */}
      <div className="w-32 h-4 bg-gray-300 rounded-md" />

      {/* Retângulo para a especialidade */}
      <div className="w-24 h-4 bg-gray-300 rounded-md" />

      {/* Retângulo para a localização */}
      <div className="w-20 h-4 bg-gray-300 rounded-md" />
    </div>
  );
}

//corpo de carregamento para a index, skeleton loading com pulse
