import { selectIsAuth } from 'redux/contacts/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import {Header, AppBarList, AppBarListItem } from './AppBar.styled';

export const AppBar = () => {
  const isAuth = useSelector(selectIsAuth);
  return (
    <Header>
      <AppBarList>
        <AppBarListItem >
          <Link to="/">Home</Link>
        </AppBarListItem>

        {!isAuth && (
          <AppBarListItem >
            <NavLink to="/register">Register</NavLink>
          </AppBarListItem>
        )}
        {isAuth && (
          <AppBarListItem >
            <NavLink to="/contacts">Contacts</NavLink>
          </AppBarListItem>
        )}
        {!isAuth && (
          <AppBarListItem >
            <NavLink to="/login">Login</NavLink>
          </AppBarListItem>
        )}
        {isAuth && <UserMenu />}
      </AppBarList>
    </Header>
  );
};
