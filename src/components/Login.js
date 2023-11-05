import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/authReducer';

import css from 'form.module.css';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(loginThunk(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <FormLabel>Email:</FormLabel>
        <Input
          size="md"
          width="240px"
          variant="filled"
          {...register('email', { required: true })}
          type="email"
        />
        {errors.email && <span>This field is required</span>}
      </label>
      <label>
        <FormLabel>Password:</FormLabel>
        <Input
          size="md"
          width="240px"
          variant="filled"
          {...register('password', { required: true })}
          type="password"
        />
        {errors.password && <span>This field is required</span>}
      </label>

      <button className={css.loginAndRegisteBtn} type="submit">
        Sign In
      </button>
    </form>
  );
};

export default LoginPage;
