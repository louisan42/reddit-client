import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import subredditSlice from '../features/Subreddits/subredditSlice';
import { redditApi } from './api/apiSlice';

export const store = configureStore({
  reducer: {
    subreddit: subredditSlice,
    [redditApi.reducerPath] : redditApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(redditApi.middleware),
})
setupListeners(store.dispatch)
