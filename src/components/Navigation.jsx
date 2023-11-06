import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonGroup } from '@chakra-ui/react';

import { logOutThunk } from 'redux/authReducer';
import { UserMenu } from './UserMenu.js';

import { selectAuthenticated } from 'redux/auth.selector';

export const Navigation = () => {
  const authenticated = useSelector(selectAuthenticated);
  const dispatch = useDispatch();

  // const onLogOut = () => {
  //   dispatch(logOutThunk());
  // };

  return (
    <header>
      <nav>
        <ButtonGroup gap="4">
          <NavLink to="/">
            <Button colorScheme="green">
              <p>Home</p>
            </Button>
          </NavLink>

          {authenticated ? (
            <>
              <NavLink to="/contacts">
                <Button colorScheme="green">
                  <p>Contacts</p>
                </Button>
              </NavLink>
              <UserMenu />
              {/* <Button
                colorScheme="red"
                className={css.logOutBtn}
                onClick={onLogOut}
              >
                Log Out
              </Button> */}
            </>
          ) : (
            <>
              <NavLink to="/login">
                <Button colorScheme="green">
                  <p>Login</p>
                </Button>
              </NavLink>
              <NavLink to="/register">
                <Button colorScheme="green">
                  <p>Register</p>
                </Button>
              </NavLink>
            </>
          )}
        </ButtonGroup>
      </nav>
    </header>
  );
};
