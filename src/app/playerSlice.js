import { createSlice } from "@reduxjs/toolkit";
import { api } from "../api/api";

const playerSlice = createSlice({
  name: "player",
  initialState: [],
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getPlayers.matchFulfilled,
      (state, { payload }) => {
        return payload.data.players;
      }
    );
  },
});

export default playerSlice.reducer;
