import { createSlice } from '@reduxjs/toolkit';
import { postsRequestAsync } from './postsAction';

const initialState = {
  loading: false,
  posts: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
};

export const postsSlice = createSlice({
  name: 'posts',
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
      .addCase(postsRequestAsync.pending, state => {
        state.loading = true;
        state.error = '';
      })
      .addCase(postsRequestAsync.fulfilled, (state, action) => {
        const { children, after } = action.payload;

        if (after) {
          // догрузка постов
          state.posts = [...state.posts, ...children];
        } else {
          // первая загрузка
          state.posts = [...children];
        }

        state.loading = false;
        state.error = '';
        state.after = after;
        state.isLast = !after;
      })
      .addCase(postsRequestAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default postsSlice.reducer;
