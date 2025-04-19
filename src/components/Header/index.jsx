import React from 'react';
import { Link } from 'react-router';

export default function Menu() {
  return (
    <div>
      <Link to="/">Login</Link>
      <Link to="/Register">Register</Link>
      <Link to="/securitys">Home</Link>
    </div>
  );
}
