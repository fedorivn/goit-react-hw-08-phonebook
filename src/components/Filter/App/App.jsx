import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// import {lazy} from 'react'

import { Navigate, Outlet } from 'react-router-dom';
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
  selectIsAuth,
} from 'redux/contacts/selectors';

import { AppContainer } from './App.styled';

// const RegisterPage = lazy(()=> import ('pages/Register/Register'));
// const LogInPage = lazy(()=> import ('pages/LogIn/LogIn'));
// const ContactsPage= lazy(()=> import ('pages/Contacts/Contacts'));

export default function App() {
  const isLoadingAuth = useSelector(selectIsLoadingAuth);
  const isLoadingContacts = useSelector(selectIsLoadingContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  // return (
  //   <AppContainer>
  //     {(isLoadingContacts || isLoadingAuth) && <Loader />}
  //     <AppBar />
  //     <Routes>
  //       <Route path="/" element={<h1>Phonebook</h1>} />
  //       <Route path="/register" element={<Register />} />
  //       <Route path="/login" element={<Login />} />
  //       <Route path="/contacts" element={<Contacts />} />
  //       <Route path="*" element={<h1>NotFound</h1>} />
  //     </Routes>
  //     {/* <ToastContainer position="top-center" theme="colored" /> */}
  //   </AppContainer>
  // );

  // OPTION 1

  // const PrivateRoute = ({ children }) => {
  //   const isLogin = useSelector(selectIsAuth);

  //   if (!isLogin) {
  //     return <Navigate to="/login" />;
  //   }

  //   return children;
  // };

  // const PublicRoute = ({ children }) => {
  //   const isLogin = useSelector(selectIsAuth);

  //   if (isLogin) {
  //     return <Navigate to="/contacts" />;
  //   }
  //   return children;
  // };

  // OPTION 2

  //   const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  //     const { isLoggedIn } = useAuth();
  //     return isLoggedIn ? <Navigate to={redirectTo} /> : <Component/>;
  //   };

  // const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  //   const { isLoggedIn, isRefreshing } = useAuth();
  //     const shouldRedirect = !isLoggedIn && !isRefreshing
  //     return shouldRedirect ? <Navigate to={redirectTo} /> :<Component/>;
  //   };

  // OPTION 3

  // const PrivateRoute = ({ children, path }) => {
  //   const isLoggedIn = useSelector(selectIsAuth);

  //   return isLoggedIn ? children : <Navigate to={`${path}`} />;
  // };
  // const PublicRoute = ({ children, path, restricted = false }) => {
  //   const isLoggedIn = useSelector(selectIsAuth);
  //   return isLoggedIn && restricted ? <Navigate to={`${path}`} /> : children;
  // };

  // OPTION 4

  // const PrivateRoute = ({ children }) => {
  //   const isLoggedin = useSelector(selectIsAuth);
  //   return isLoggedin ? children : <Navigate to="/" />;
  // };

  // const PublicRoute = ({ children, restricted = false }) => {
  //   const isLoggedin = useSelector(selectIsAuth);
  //   const shouldRedirect = isLoggedin && restricted;
  //   return shouldRedirect ? <Navigate to="/contacts" /> : children;
  // };

  // OPTION 5

  const PrivateRoute = () => {
    const { isAuth, token } = useSelector(selectIsAuth);

    if (!isAuth && token) {
      return <Loader />;
    }

    if (!isAuth && !token) {
      return <Navigate to="/login" />;
    }

    return <Outlet />;
  };

  const PublicRoute = () => {
    const isAuth = useSelector(selectIsAuth);
console.log(isAuth)
    if (isAuth) {
      return <Navigate to="/login" />;
    }

    return <Outlet />;
  };

  return (
    <AppContainer>
      {(isLoadingContacts || isLoadingAuth) && <Loader />}
      <AppBar />
      <Routes>
        <Route path="/" element={<h1>Phonebook</h1>} />
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<Contacts />} />
        </Route>
        <Route path="*" element={<h1>NotFound</h1>} />
      </Routes>
      {/* <ToastContainer position="top-center" theme="colored" /> */}
    </AppContainer>
  );
}

//   return (
//     <AppContainer>
//       {(isLoadingContacts || isLoadingAuth) && <Loader />}
//       <AppBar />
//       <Routes>
//         <Route path="/" element={<h1>Phonebook</h1>} />
//         <Route
//           path="/register"
//           element={
//             <PublicRoute path={'/'} restricted>
//               <Register />
//             </PublicRoute>
//           }
//         />
//         <Route
//           path="/login"
//           element={
//             <PublicRoute  path={'/'} restricted>
//               <Login />
//             </PublicRoute>
//           }
//         />
//         <Route
//           path="/contacts"
//           element={
//             <PrivateRoute path={'/login'}>
//               <Contacts />
//             </PrivateRoute>
//           }
//         />
//         <Route path="*" element={<h1>NotFound</h1>} />
//       </Routes>
//       {/* <ToastContainer position="top-center" theme="colored" /> */}
//     </AppContainer>
//   );
// }

// <>
// <Routes>
//   <Route path="/" element={<Layout />}>
//     <Route index element={<Navigate to="home"></Navigate>} />

//     <Route path="home" element={<HomePage />} />
//     <Route
//       path="register"
//       element={
//         <PublicRoute>
//           <RegisterPage />
//         </PublicRoute>
//       }
//     />
//     <Route
//       path="login"
//       element={
//         <PublicRoute>
//           <LoginPage />
//         </PublicRoute>
//       }
//     />
//     <Route
//       path="contacts"
//       element={
//         <PrivateRoute>
//           <ContactsPage />
//         </PrivateRoute>
//       }
//     />
//     <Route path="*" element={<NotFoundPage />} />
//   </Route>
// </Routes>

// <Toaster position="top-center" reverseOrder={false} />
// </>
// );
// };

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
