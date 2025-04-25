import React from 'react';

import Login from '../../components/Login';
import securityAlone from '../../assets/loginPageAlone.png';

export default function LoginPage() {
  return (
    <div className="flex">
      <div className="w-1/3">
        <img
          src={securityAlone}
          alt="securitysingleguy"
          className="h-screen w-screen object-cover"
        />
      </div>
      <div className="w-2/3">
        <Login></Login>
      </div>
    </div>
  );
}
