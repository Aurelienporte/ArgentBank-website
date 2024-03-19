import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const apiSlice = createApi({

  reducerPath: 'api',

  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:3001/api/v1',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }

      return headers
    } 
  }),

  endpoints: builder => ({

    userLogin: builder.mutation({
      query: (credentials) => ({
        url:'/user/login',
        method:'POST',
        body: credentials
      })
    }),
    getUser: builder.mutation({
      query: () => ({
        url:'/user/profile',
        method:'POST',
      })
    }),
    setUser: builder.mutation({
      query: (newName) => ({
        url:'/user/profile',
        method:'PUT',
        body: newName
      })
    })
  })
})

// Export the auto-generated hook for the query endpoint
export const { useUserLoginMutation , useGetUserMutation, useSetUserMutation} = apiSlice