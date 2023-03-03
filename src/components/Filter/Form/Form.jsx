import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
// import { addNewContact } from 'redux/contacts/contsctsSlice';
import { selectContacts } from 'redux/contacts/selectors';
import { addNewContact } from 'redux/contacts/operations';


import { Contacts, Label, Input, Button } from './Form.styled';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleInputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const checkDuplicate = value =>
    contacts.some(({ name }) => name.toLowerCase() === value.toLowerCase());


  const handleSubmit = e => {
    e.preventDefault();
    checkDuplicate(name);
    const form = e.currentTarget;

    const foundName = contacts.find(contact => contact.name === name);
    if (foundName) {
      toast.error(`${foundName.name } is already in your contact list`);
      return;
    }

    dispatch(addNewContact({ name, number }));
    form.reset();
setName('')
setNumber('')
 
  };

  return (
    <Contacts onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Contacts>
  );
}


