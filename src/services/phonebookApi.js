import axios from 'axios';

const phonebookInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  phonebookInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const requestRegister = async formData => {
  const { data } = await phonebookInstance.post('/users/signup', formData);
  setToken(data.token);

  return data;
};

export const requestLogin = async formData => {
  const { data } = await phonebookInstance.post('/users/login', formData);
  setToken(data.token);

  return data;
};

export const requestLogout = async () => {
  const { data } = await phonebookInstance.post('/users/logout');

  return data;
};

export const requestRefreshUser = async () => {
  const { data } = await phonebookInstance.get('/users/current');

  return data;
};

export const requestFetch = async () => {
  const { data } = await phonebookInstance.get('/contacts');

  return data;
};

export const requestAddContact = async newProduct => {
  const { data } = await phonebookInstance.post('/contacts', newProduct);

  return data;
};

export const requestDeleteContact = async productId => {
  const { data } = await phonebookInstance.delete(`/contacts/${productId}`);

  return data;
};
