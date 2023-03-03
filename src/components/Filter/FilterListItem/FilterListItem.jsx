import React from 'react';
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';

// import { deleteContact } from 'redux/contacts/contsctsSlice';
import { useDispatch} from 'react-redux';
import { ListItem, Prompt, Button } from './FilterListItem.styled';
import { deleteContact } from 'redux/contacts/operations';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <ListItem>
      <Prompt>{name}</Prompt>
      <Prompt>{number}</Prompt>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete <DeleteIcon />
      </Button>
    </ListItem>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
