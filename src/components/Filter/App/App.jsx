import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';


// import { useAuth } from 'hooks/useAuth';
import { getUser } from 'redux/contacts/operations';

import { AppBar } from 'pages/AppBar/AppBar';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/LogIn/LogIn';
import { Contacts } from 'pages/Contacts/Contacts';
import { Loader } from 'components/Loader/Loader';
import {
  selectIsLoadingAuth,
  selectIsLoadingContacts,
} from 'redux/contacts/selectors';

import { AppContainer } from './App.styled';


export default function App() {
  const isLoadingAuth = useSelector(selectIsLoadingAuth);
  const isLoadingContacts = useSelector(selectIsLoadingContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <AppContainer>
      {(isLoadingContacts || isLoadingAuth) && <Loader />}
      <AppBar />
      <Routes>
        <Route path="/" element={<h1>Phonebook</h1>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<h1>NotFound</h1>} />
      </Routes>
      <ToastContainer position="top-center" theme="colored" />
    </AppContainer>
  );

}