import React from 'react';
import { Route, useNavigate, Outlet, useLocation } from 'react-router';
import PropTypes from 'prop-types';

export default function AuthRoute({ component: Component, isClosed, ...rest }) {
  const IsLoggedIn = false;
  const navigate = useNavigate();
  const location = useLocation();

  if (isClosed && !IsLoggedIn) {
    navigate('/', { state: { prevPath: location.pathname } });
  }
  return <Outlet {...rest} component={Component} />;
}

AuthRoute.defaultProps = {
  isClosed: false,
};

AuthRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
};
