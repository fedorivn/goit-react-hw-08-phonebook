import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';



export const getUser = createAsyncThunk('auth/getUser', async (_, thunkAPI) => {
  const token = thunkAPI.getState().auth.token;
  if (token) {
    axios.defaults.headers.common.Authorization = token;
    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (e) {
      console.log(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
  return thunkAPI.rejectWithValue();
});

export const register = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', {
        name,
        email,
        password,
      });
      axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
      toast.success(`Welcome ${name}`);
      return response.data;
    } catch (e) {
      console.log(e);
      toast.warning(`${email} is not correct`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', { email, password });
      axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
      toast.success(`Welcome `);
      return response.data;
    } catch (e) {
      toast.warning(`Wrong login and/or password`);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const response = await axios.post('/users/logout');

    axios.defaults.headers.common.Authorization = null;

    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

// export const refreshUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     const { token } = thunkAPI.getState().auth;
//     if (!token) {
//       return thunkAPI.rejectWithValue('Unable to fetch user');
//     }
//   }
// );

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addNewContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
