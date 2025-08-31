import { authReducer } from './auth/authReducer';
import { commentReducer } from './comment/commentReducer';
import { tokenMiddleware } from './token/tokenAction';
import { tokenReducer } from './token/tokenReducer';
import postsReducer from './posts/postsSlice';
import postCommentsReducer from './postComments/postCommentsSlice';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import { searchReducer } from './search/searchReducer';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    tokenReducer,
    commentReducer,
    auth: authReducer,
    postsReducer,
    postCommentsReducer,
    searchReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(tokenMiddleware, sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
