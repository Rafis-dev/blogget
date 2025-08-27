import { authReducer } from './auth/authReducer';
import { commentReducer } from './comment/commentReducer';
import { tokenMiddleware } from './token/tokenAction';
import { tokenReducer } from './token/tokenReducer';
import postsReducer from './posts/postsSlice';
import postCommentsReducer from './postComments/postCommentsSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    tokenReducer,
    commentReducer,
    auth: authReducer,
    postsReducer,
    postCommentsReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(tokenMiddleware),
});
