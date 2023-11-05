import React, { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Navigation } from './Navigation';
import { RotatingLines } from 'react-loader-spinner';
import { refreshThunk } from 'redux/authReducer';
import RestictedRoute from './RestictedRoute';
import PrivateRoute from './PrivateRoute';

import css from 'form.module.css';

const Home = lazy(() => import('./HomePage'));
const Contact = lazy(() => import('./Contacts/Contact'));
const Login = lazy(() => import('./Login'));
const Register = lazy(() => import('./Register'));

const appRoutes = [
  {
    path: '/register',
    element: (
      <RestictedRoute>
        <Register />
      </RestictedRoute>
    ),
  },
  {
    path: '/login',
    element: (
      <RestictedRoute>
        <Login />
      </RestictedRoute>
    ),
  },
  {
    path: '/contacts',
    element: (
      <PrivateRoute>
        <Contact />
      </PrivateRoute>
    ),
  },
];

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <Suspense
        fallback={
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="48"
            visible={true}
          />
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
    </>
  );
};
