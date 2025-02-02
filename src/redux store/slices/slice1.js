
import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    posts: [],
    loading: false,
    error: null
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const { setPosts, setLoading, setError } = dataSlice.actions;
export default dataSlice.reducer;
