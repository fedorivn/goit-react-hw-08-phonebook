import { register } from 'redux/contacts/operations';
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

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  if (!isAuth) {
    return (
      <Contacts onSubmit={handleSubmit}>
        <Label>
          Username
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces.
                    For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </Label>
        <Label>
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
          Register
        </Button>
      </Contacts>
    );
  } else {
    return <Navigate to="/contacts" replace={true} />;
  }
};
