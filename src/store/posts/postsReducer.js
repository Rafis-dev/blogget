import {
  POST_REQUEST,
  POST_REQUEST_ERROR,
  POST_REQUEST_SUCCESS,
  POST_CLEAR,
} from './postsAction';

const initialState = {
  loading: false,
  data: [],
  error: '',
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
        data: action.data,
        error: '',
        loading: false,
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
        data: [],
      };
    default:
      return state;
  }
};
