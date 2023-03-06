import { selectIsAuth } from 'redux/contacts/selectors';
import {  useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import  Form  from 'components/Filter/Form/Form';
import { FilterList } from 'components/Filter/FilterList/FilterList';
import { Filter } from 'components/Filter/Filter/Filter'
import { Container, Title, Subtitle } from 'components/Filter/App/App.styled';
import { Loader } from 'components/Loader/Loader';

import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoadingContacts } from 'redux/contacts/selectors';

export const Contacts = () => {
    const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingContacts);

  const isAuth = useSelector(selectIsAuth);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (isAuth) {
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
  } else {
    //  <Navigate to="/login" replace={true} />

// <h3>
//   Please log in or register
// </h3>
  }
};

