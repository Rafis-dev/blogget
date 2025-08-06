import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { commentRequestAsync } from '../store/postComments/postCommentsAction';

export const useCommentsData = id => {
  const token = useSelector(state => state.tokenReducer.token);
  const dispatch = useDispatch();
  const { post, comments, status } = useSelector(
    state => state.postCommentsReducer
  );

  useEffect(() => {
    dispatch(commentRequestAsync(id));
  }, [token, id]); // Обновляем при изменении token или id

  // Возвращаем объект, чтобы было читаемо
  return { post, comments, status };
};
