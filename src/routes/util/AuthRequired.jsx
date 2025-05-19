import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { useSelector } from 'react-redux';

// useSelector((state) => state.auth.isLoggedIn)

export default function AuthRoute() {
  const logged = useSelector((state) => {
    return state.auth.isLoggedIn;
  });
  const isLoggedIn = logged;

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
}
