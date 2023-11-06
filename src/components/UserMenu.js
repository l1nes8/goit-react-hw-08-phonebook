import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logOutThunk } from 'redux/authReducer';
import { selectUserEmail } from 'redux/auth.selector';

import { Text } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

import css from 'form.module.css';

export const UserMenu = () => {
  const userEmail = useSelector(selectUserEmail);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <div>
      <Button colorScheme="red" className={css.logOutBtn} onClick={onLogOut}>
        Log Out
      </Button>
      <div>
        <Text as="b" className={css.userMail}>
          {userEmail}
        </Text>
      </div>
    </div>
  );
};
