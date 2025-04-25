import React from 'react';
import Register from '../../components/RegisterSection';
import Image from '../../assets/registerPageGroup.png';

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/2">
        <Register />
      </div>

      <div className="w-1/2">
        <img
          src={Image}
          alt="super security guy"
          className="w-screen h-screen object-cover"
        />
      </div>
    </div>
  );
}
