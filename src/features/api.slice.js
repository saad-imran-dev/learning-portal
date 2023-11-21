import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const appApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://localhost:7039/',
    }),
    endpoints: (builder) => ({
        getAllPosts: builder.query({
            query: (args) => ({
                url: 'post',
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${args.token}`,
                },
                params: args.params
            }),
        }),
    }),
})

export const { useGetAllPostsQuery } = appApi