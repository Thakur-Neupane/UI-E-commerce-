import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cats: [],
};

const catSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCat: (state, { payload = [] }) => {
      state.cats = payload;
    },
  },
});

const { reducer, actions } = catSlice;

export const { setCat } = actions;

export default reducer;
