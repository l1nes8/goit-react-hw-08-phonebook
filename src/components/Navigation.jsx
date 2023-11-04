import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthenticated } from 'redux/auth.selector';
import { logOutThunk } from 'redux/authReducer';

export const Navigation = () => {
  const authenticated = useSelector(selectAuthenticated);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <header>
      <nav>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>

        {authenticated ? (
          <>
            <NavLink to="/contacts">
              <li>Contacts</li>
            </NavLink>
            <button onClick={onLogOut}>Log Out</button>
          </>
        ) : (
          <>
            <NavLink to="/login">
              <li>Login</li>
            </NavLink>
            <NavLink to="/register">
              <li>Register</li>
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
};
