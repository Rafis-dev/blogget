import axios from 'axios';
import { URL_API } from '../../api/const';
export const POST_REQUEST = 'POST_REQUEST';
export const POST_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS';
export const POST_REQUEST_ERROR = 'POST_REQUEST_ERROR';
export const POST_CLEAR = 'POST_CLEAR';

export const postsClear = () => ({
  type: POST_CLEAR,
});

export const postsRequest = () => ({
  type: POST_REQUEST,
});

export const postsRequestSuccess = data => ({
  type: POST_REQUEST_SUCCESS,
  data,
});

export const postsRequestError = error => ({
  type: POST_REQUEST_ERROR,
  error,
});

export const postsRequestAsync = () => (dispatch, getState) => {
  const token = getState().tokenReducer.token;

  if (!token) {
    dispatch(postsClear());
    return;
  }

  dispatch(postsRequest());

  axios(`${URL_API}/best`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({ data }) => dispatch(postsRequestSuccess(data.data.children)))
    .catch(err => {
      console.error(err);
    });
};
