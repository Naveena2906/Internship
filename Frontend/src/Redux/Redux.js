import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admin: null,
  item: [],
};

const Redux = createSlice({
  name: "admin",
  initialState,
  reducers: {
    SetAdmin: (state, action) => {
      state.admin = action.payload;
    },
    addproduct: (state, action) => {
      state.item.push(action.payload);
    },
  },
});

export const { addproduct } = Redux.actions;
export const getprod = (state) => state.adminInfo.item; // Change adminInfo to admin
export default Redux.reducer;
