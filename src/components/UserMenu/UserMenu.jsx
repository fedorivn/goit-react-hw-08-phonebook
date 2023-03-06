import { logout } from 'redux/contacts/operations';
import { selectUserName } from 'redux/contacts/selectors';
import { useSelector, useDispatch } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import { Button } from 'components/Filter/Form/Form.styled';
// import s from '../../components/pages/Contacts/ContactList/ContactList.module.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const UserMenu = () => {
  const name = useSelector(selectUserName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex',  marginLeft: '850px', alignItems: 'center' }}>
      {/* <div> style={{ display: 'flex', marginLeft: '10px', alignItems: 'center' }} */}
      <p style={{ marginRight: '20px', display: 'flex',alignItems: 'center' }}>
        <Avatar style={{  marginRight: '10px'}} /> {name}
      </p>
      {/* </div> */}
      <Button
        type="button"
        onClick={() => {
          dispatch(logout());
          navigate('/');
          toast.warning('Please login or register');
        }}
      >
        Sign Out
      </Button>
    </div>
  );
};
