import { login } from 'redux/contacts/operations';
import { selectIsAuth } from 'redux/contacts/selectors';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
    Contacts,
    Label,
    Input,
    Button,
  } from 'components/Filter/Form/Form.styled';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  if (!isAuth) {
    return (
      <Contacts onSubmit={handleSubmit}>
        <Label >
          Email
          <Input
            type="email"
            name="email"
            required
            value={email}
            onChange={handleChange}
          />
        </Label>
        <Label>
          Password
          <Input
            type="password"
            name="password"
            required
            value={password}
            onChange={handleChange}
          />
        </Label>
        <Button type="submit">
          Log in
        </Button>
      </Contacts>
    );
  } else {
    return <Navigate to="/contacts" replace={true} />;
  }
};