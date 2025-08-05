export const COMMENT_REQUEST = 'COMMENT_REQUEST';
export const COMMENT_REQUEST_SUCCESS = 'COMMENT_REQUEST_SUCCESS';
export const COMMENT_REQUEST_ERROR = 'COMMENT_REQUEST_ERROR';

export const commentRequest = () => ({
  type: COMMENT_REQUEST,
});

export const commentRequestSuccess = data => ({
  type: COMMENT_REQUEST_SUCCESS,
  data,
});

export const commentRequestError = error => ({
  type: COMMENT_REQUEST_ERROR,
  error,
});

export const commentRequestAsync = () => (dispatch, getState) => {};
