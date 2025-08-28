import axios from 'axios';
import { URL_API } from '../../api/const';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { postsSlice } from './postsSlice';

export const postsRequestAsync = createAsyncThunk(
  'posts/fetch',
  (newPage, { getState, rejectWithValue, dispatch }) => {
    let page = getState().postsReducer.page;

    if (newPage) {
      page = newPage;
      dispatch(postsSlice.actions.changePage(page));
    }

    const token = getState().tokenReducer.token;
    const after = getState().postsReducer.after;
    const isLast = getState().postsReducer.isLast;

    if (!token) return rejectWithValue('Нет токена');

    if (isLast) return rejectWithValue('Больше постов нет');

    return axios(
      `${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      }
    )
      .then(({ data }) => data.data)
      .catch(err => {
        console.error(err);
      });
  }
);
