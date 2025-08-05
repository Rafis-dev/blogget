import { combineReducers, createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';
import { authReducer } from './auth/authReducer';
import { commentReducer } from './comment/commentReducer';
import { tokenMiddleware } from './token/tokenAction';
import { tokenReducer } from './token/tokenReducer';
import { postsReducer } from './posts/postsReducer';
import { postCommentsReudcer } from './postComments/postCommentsReducer';

const rootReducer = combineReducers({
  tokenReducer,
  commentReducer,
  auth: authReducer,
  postsReducer,
  postCommentsReudcer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk))
);
