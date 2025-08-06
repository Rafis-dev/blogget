import {
  COMMENT_REQUEST,
  COMMENT_REQUEST_ERROR,
  COMMENT_REQUEST_SUCCESS,
} from './postCommentsAction';

const initialState = {
  post: null,
  comments: [],
  status: '',
  error: '',
};

export const postCommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENT_REQUEST:
      return {
        ...state,
        status: 'loading',
        error: '',
      };

    case COMMENT_REQUEST_SUCCESS:
      return {
        ...state,
        post: action.post,
        comments: action.comments,
        status: 'loaded',
        error: '',
      };

    case COMMENT_REQUEST_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.error,
      };

    default:
      return state;
  }
};
