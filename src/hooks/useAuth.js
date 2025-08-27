import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { authLogout, authRequestAsync } from '../store/auth/action';
import { useNavigate } from 'react-router-dom';
import { postsSlice } from '../store/posts/postsSlice';

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
    dispatch(postsSlice.actions.postsClear());
    navigate('/');
  };

  return [auth, loading, clearAuth];
};
