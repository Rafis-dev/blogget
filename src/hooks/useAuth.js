import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { authLogout, authRequestAsync } from '../store/auth/action';
import { postsClear } from '../store/posts/postsAction';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const auth = useSelector(state => state.auth.data);
  const token = useSelector(state => state.tokenReducer.token);
  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(authRequestAsync());
  }, [token]);

  const clearAuth = () => {
    dispatch(authLogout());
    dispatch(postsClear());
    navigate('/');
  };

  return [auth, loading, clearAuth];
};
