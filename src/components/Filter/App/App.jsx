
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Form from '../Form/Form';
import { Filter } from '../Filter/Filter';
import { Container, Title, Subtitle } from './App.styled';
import { FilterList } from '../FilterList/FilterList';
import { Loader } from 'components/Loader/Loader';

import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';



export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
       {isLoading && <Loader />}
      <ToastContainer position="top-center" theme="colored" />
      <Title>PhoneBook</Title>
      <Form  />
      <Subtitle>Contacts</Subtitle>
      <Filter />
      <FilterList
      />
    </Container>
  );
}


