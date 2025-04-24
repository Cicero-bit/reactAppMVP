import React from 'react';
import Register from '../../components/RegisterSection';
import Image from '../../assets/security-guard-CP16NW.jpg';

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/2">
        <Register />
      </div>

      <div className="w-1/2">
        <img
          src={''}
          alt="super security guy"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
