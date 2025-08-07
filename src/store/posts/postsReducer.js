import {
  POST_REQUEST,
  POST_REQUEST_ERROR,
  POST_REQUEST_SUCCESS,
  POST_CLEAR,
  POST_REQUEST_SUCCESS_AFTER,
} from './postsAction';

const initialState = {
  loading: false,
  posts: [],
  error: '',
  after: '',
  isLast: false,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case POST_REQUEST_SUCCESS:
      return {
        ...state,
        posts: action.posts,
        error: '',
        loading: false,
        after: action.after,
        isLast: !action.after,
      };
    case POST_REQUEST_SUCCESS_AFTER:
      return {
        ...state,
        posts: [...state.posts, ...action.posts],
        error: '',
        loading: false,
        after: action.after,
        isLast: !action.after,
      };
    case POST_REQUEST_ERROR:
      return {
        ...state,
        error: action.err,
        loading: false,
      };
    case POST_CLEAR:
      return {
        ...state,
        error: '',
        loading: false,
        posts: [],
        after: '',
      };
    default:
      return state;
  }
};
