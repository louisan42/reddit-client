import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import contentSlice from '../features/contents/contentSlice';
import subredditSlice from '../features/Subreddits/subredditSlice';
import { redditApi } from './api/apiSlice';

export const store = configureStore({
  reducer: {
    posts: contentSlice,
    subreddit: subredditSlice,
    [redditApi.reducerPath] : redditApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(redditApi.middleware),
})
setupListeners(store.dispatch)
