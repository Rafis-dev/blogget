import { createSlice } from '@reduxjs/toolkit';
import { postsRequestAsync } from './postsAction';

const initialState = {
  loading: false,
  posts: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
  currentRequestId: undefined,
};

export const postsSlice = createSlice({
  name: 'posts/fetch',
  initialState,
  reducers: {
    postsClear: state => {
      state.error = '';
      state.loading = false;
      state.posts = [];
      state.after = '';
    },

    changePage: (state, action) => {
      state.page = action.payload;
      state.after = '';
      state.isLast = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(postsRequestAsync.pending, (state, action) => {
        state.loading = true;
        state.error = '';
        state.currentRequestId = action.meta.requestId;
      })
      .addCase(postsRequestAsync.fulfilled, (state, action) => {
        if (!action.payload) return;
        if (state.currentRequestId !== action.meta.requestId) return;

        const { children, after } = action.payload;
        // prettier-ignore
        state.posts =
          state.posts.length > 0 ?
          [...state.posts, ...children] :
          [...children];

        state.loading = false;
        state.error = '';
        state.after = after;
        state.isLast = !after;
        state.currentRequestId = undefined;
      })
      .addCase(postsRequestAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.currentRequestId = undefined;
      });
  },
});

export default postsSlice.reducer;
