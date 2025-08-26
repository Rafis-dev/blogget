import { createSlice } from '@reduxjs/toolkit';
import { commentRequestAsync } from './postCommentsAction';

const initialState = {
  post: null,
  comments: [],
  status: '',
  error: '',
};

export const postCommentsSlice = createSlice({
  name: 'postComments',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(commentRequestAsync.pending, state => {
        state.error = '';
        state.status = 'loading';
      })
      .addCase(commentRequestAsync.fulfilled, (state, action) => {
        state.post = action.payload.post;
        state.comments = action.payload.comments;
        state.error = '';
        state.status = 'loaded';
      })
      .addCase(commentRequestAsync.rejected, (state, action) => {
        state.error = action.error;
        state.status = 'error';
      });
  },
});

export default postCommentsSlice.reducer;
