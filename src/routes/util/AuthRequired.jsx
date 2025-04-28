import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { useSelector } from 'react-redux';

export default function AuthRoute() {
  const IsLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (!IsLoggedIn) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
}
