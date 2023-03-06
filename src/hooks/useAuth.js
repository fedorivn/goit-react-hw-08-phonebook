import { useSelector } from 'react-redux';
import {
    selectIsAuth,
    selectIsLoadingAuth 
} from 'redux/contacts/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsAuth);
  const isRefreshing = useSelector(selectIsLoadingAuth );


  return {
    isLoggedIn,
    isRefreshing,
  
  };
};
