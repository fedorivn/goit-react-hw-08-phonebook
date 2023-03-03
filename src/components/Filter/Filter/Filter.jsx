import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/contsctsSlice';


import { Container, Prompt, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  const handleFilter = event =>
    dispatch(getFilter(event.currentTarget.value.toLowerCase()));
  return (
    <Container>
      <Prompt>Find contats by name</Prompt>
      <Input type="text" name="search" value={filter} onChange={handleFilter} />
    </Container>
  );
};

