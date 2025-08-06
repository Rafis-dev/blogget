export const COMMENT_REQUEST = 'COMMENT_REQUEST';
export const COMMENT_REQUEST_SUCCESS = 'COMMENT_REQUEST_SUCCESS';
export const COMMENT_REQUEST_ERROR = 'COMMENT_REQUEST_ERROR';
import { URL_API } from '../../api/const';

export const commentRequest = () => ({
  type: COMMENT_REQUEST,
});

export const commentRequestSuccess = (post, comments) => ({
  type: COMMENT_REQUEST_SUCCESS,
  post,
  comments,
});

export const commentRequestError = error => ({
  type: COMMENT_REQUEST_ERROR,
  error,
});

export const commentRequestAsync = id => (dispatch, getState) => {
  const token = getState().tokenReducer.token;

  if (!token) {
    dispatch(commentRequestError());
    return;
  }

  fetch(`${URL_API}/comments/${id}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(response => {
      if (response.status === 401) {
        throw new Error('Unauthorized (401)');
      }
      return response.json();
    })
    .then(([postData, commentsData]) => {
      // Разбираем данные поста
      const post = postData.data.children[0].data;

      // Разбираем массив комментариев
      const comments = commentsData.data.children.map(item => item.data);

      dispatch(commentRequestSuccess(post, comments));
    })
    .catch(err => {
      console.error('Ошибка при получении данных с Reddit:', err);
    });
};
