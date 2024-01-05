import { createSlice } from "@reduxjs/toolkit";

const initialState = "All";
const TabsSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    changeTab: (state, action) => {
      return action.payload;
    },
  },
});

export const { changeTab } = TabsSlice.actions;
export default TabsSlice.reducer;
