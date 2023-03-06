import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// import {lazy} from 'react'

import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { getUser } from 'redux/contacts/operations';

import { AppBar } from 'pages/AppBar/AppBar';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/LogIn/LogIn';
import { Contacts } from 'pages/Contacts/Contacts';
import { Loader } from 'components/Loader/Loader';
import {
  selectIsLoadingAuth,
  selectIsLoadingContacts,
  // selectIsAuth,
 
} from 'redux/contacts/selectors';



import { AppContainer } from './App.styled';

// const RegisterPage = lazy(()=> import ('pages/Register/Register'));
// const LogInPage = lazy(()=> import ('pages/LogIn/LogIn'));
// const ContactsPage= lazy(()=> import ('pages/Contacts/Contacts'));



export default function App(){
  const isLoadingAuth = useSelector(selectIsLoadingAuth);
  const isLoadingContacts = useSelector(selectIsLoadingContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? <Navigate to={redirectTo} /> : <Component/>;
  };

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
    const shouldRedirect = !isLoggedIn && !isRefreshing 
    return shouldRedirect ? <Navigate to={redirectTo} /> :<Component/>;
  };
  
  return (
    <AppContainer>
      {(isLoadingContacts || isLoadingAuth) && <Loader />}
      <AppBar />
      <Routes>
      <Route path="/" element={<h1>Phonebook</h1>} />
        {/* <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={Register}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={Login} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
        <Route path="*" element={<h1>Page not found</h1>}/>
     */}

        <Route path="/" element={<h1>Phonebook</h1>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/contacts" element={<Contacts />} /> 
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </AppContainer>
  );
}; 

// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import Form from '../Form/Form';
// import { Filter } from '../Filter/Filter';
// import { Container, Title, Subtitle } from './App.styled';
// import { FilterList } from '../FilterList/FilterList';
// import { Loader } from 'components/Loader/Loader';

// import { fetchContacts } from 'redux/contacts/operations';
// import { selectIsLoading } from 'redux/contacts/selectors';

// export default function App() {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <Container>
//        {isLoading && <Loader />}
//       <ToastContainer position="top-center" theme="colored" />
//       <Title>PhoneBook</Title>
//       <Form  />
//       <Subtitle>Contacts</Subtitle>
//       <Filter />
//       <FilterList
//       />
//     </Container>
//   );
// }
