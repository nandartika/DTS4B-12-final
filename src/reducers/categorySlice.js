const { createSlice } = require("@reduxjs/toolkit");

const categorySlice = createSlice({
  name: "category",
  initialState: { category: "Business" },
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
    },
  },
});

export const categoryActions = categorySlice.actions;

export default categorySlice;
