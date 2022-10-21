import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../reducers/categorySlice";
import { newsApi } from "../services/newsApi";

const store = configureStore({
  reducer: {
    category: categorySlice.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
});

export default store;
