import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fsa-puppy-bowl.herokuapp.com/api/2311-fsa-et-web-ft-sf",
    tagTypes: ["Player"]
  }),
  endpoints: (builder) => ({
    getPlayers: builder.query({
      query: () => "/players",
      providesTags: ["Player"]
    }),

    getPlayer: builder.query({
      query: (id) => "/players/" + id,
    }),
 
    addNewPlayer: builder.mutation({
      query: (payload) => ({
        url: "/players",
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
      invalidatesTags: ["Todos"]
    }),
  }),
});

export const { useGetPlayersQuery, useGetPlayerQuery, useAddNewPlayerMutation } = api;
