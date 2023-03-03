import React from 'react';

import { useSelector } from 'react-redux';

import { ContactItem } from '../FilterListItem/FilterListItem';
import { ContactsList } from './FilterList.styled';

import { selectContacts, selectFilter } from 'redux/contacts/selectors';


export const FilterList = () => {

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(({ name}) =>
  name.toLowerCase().includes(filter)
);

 
  return (
    <ContactsList>
      {filteredContacts.map(({ id, name, number })=> (
        <ContactItem
          key={id}
          name={name}
          number={number}
          id={id}
  
        />
      ))}
    </ContactsList>
  );
};
