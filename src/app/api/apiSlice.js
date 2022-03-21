import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const redditApi = createApi({
    reducerPath:'redditApi',
    baseQuery: fetchBaseQuery({baseUrl:`https://www.reddit.com/r/`}),
    endpoints: (builder) => ({
        getSubreddit: builder.query({
            query: (id) =>`${id}.json`,
            
        })
    })
})

export const {getSubredditContent} = redditApi;