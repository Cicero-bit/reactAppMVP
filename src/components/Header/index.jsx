import React from 'react';
import { Link } from 'react-router';

export default function Menu() {
  return (
    <div className="flex space-x-4">
      <Link to="/">Login</Link>
      <Link to="/Register">Register</Link>
      <Link to="/securitys">Home</Link>
    </div>
  );
}
