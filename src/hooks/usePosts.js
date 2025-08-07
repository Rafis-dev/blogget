import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postsRequestAsync } from '../store/posts/postsAction';

export const usePosts = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.tokenReducer.token);
  const posts = useSelector(state => state.postsReducer.posts);
  const loading = useSelector(state => state.postsReducer.loading);

  useEffect(() => {
    dispatch(postsRequestAsync());
  }, [token]);

  return [posts, loading];
};
