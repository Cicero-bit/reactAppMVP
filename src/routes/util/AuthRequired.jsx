import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { useSelector } from 'react-redux';

// useSelector((state) => state.auth.isLoggedIn)

export default function AuthRoute() {
  const IsLoggedIn = true;

  if (!IsLoggedIn) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
}
