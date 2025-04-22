import React from 'react';
import { Navigate, Outlet } from 'react-router';

export default function AuthRoute() {
  const IsLoggedIn = true;

  if (!IsLoggedIn) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
}
