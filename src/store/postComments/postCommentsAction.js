import { URL_API } from '../../api/const';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const commentRequestAsync = createAsyncThunk(
  'comments/fetch',
  (id, { getState }) => {
    const token = getState().tokenReducer.token;

    if (!token) return;

    return axios(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => {
        if (response.status === 401) {
          throw new Error('Unauthorized (401)');
        }

        const [postData, commentsData] = response.data;
        // Разбираем данные поста
        const post = postData.data.children[0].data;

        // Разбираем массив комментариев
        const comments = commentsData.data.children.map(item => item.data);

        return { post, comments };
      })
      .catch(error => ({ error: error.toString() }));
  }
);
