import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/authReducer';
import { Button } from '@chakra-ui/react';
import { selectUserEmail } from 'redux/auth.selector';
import css from 'form.module.css';

export const UserMenu = () => {
  const userEmail = useSelector(selectUserEmail);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <div>
      <p>{userEmail}</p>
      <Button colorScheme="red" className={css.logOutBtn} onClick={onLogOut}>
        Log Out
      </Button>
    </div>
  );
};
