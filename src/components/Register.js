import React from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/authReducer';
import { useForm } from 'react-hook-form';
import css from 'form.module.css';
import { FormControl, FormLabel, FormHelperText } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(registerThunk(data));
    reset();
  };

  return (
    <FormControl onSubmit={handleSubmit(onSubmit)}>
      <label>
        <FormLabel>Email:</FormLabel>
        <Input
          size="md"
          width="240px"
          variant="filled"
          {...register('email', { required: true })}
          type="email"
        />
        {errors.email && (
          <FormHelperText>This field is required</FormHelperText>
        )}
      </label>
      <label>
        <FormLabel>Name:</FormLabel>
        <Input
          size="md"
          width="240px"
          variant="filled"
          {...register('name', { required: true })}
          type="text"
        />
        {errors.name && <span>This field is required</span>}
      </label>
      <label>
        <FormLabel>Password:</FormLabel>
        <Input
          size="md"
          width="240px"
          variant="filled"
          {...register('password', { required: true, minLength: 7 })}
          type="password"
        />
        {errors.password && <span>This field is required</span>}
      </label>

      <button className={css.loginAndRegisteBtn} type="submit">
        Sign Up
      </button>
    </FormControl>
  );
};

export default RegisterPage;
