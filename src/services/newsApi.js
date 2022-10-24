import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_TOKEN = process.env.REACT_APP_API_TOKEN;

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bing-news-search1.p.rapidapi.com/news/",
    prepareHeaders: (headers, { getState }) => {
      headers.set("X-BingApis-SDK", "true");
      headers.set("X-RapidAPI-Key", API_TOKEN);
      headers.set("X-RapidAPI-Host", "bing-news-search1.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopNews: builder.query({
      query: () => ({
        url: "/",
        params: {
          safeSearch: "Off",
          textFormat: "Raw",
        },
      }),
      transformResponse: (response) => {
        return response ? response.value[0] : { error: response.message };
      },
    }),
    getLastestNews: builder.query({
      query: ({ category }) => ({
        url: "/",
        params: {
          count: "8",
          category: category,
          mkt: "en-US",
          safeSearch: "Off",
          textFormat: "Raw",
        },
      }),
    }),
    getSearchNews: builder.query({
      query: ({ keyword, singel = false }) => ({
        url: "search",
        params: {
          q: keyword,
          count: singel ? 1 : 50,
          freshness: "Day",
          textFormat: "Raw",
          safeSearch: "Off",
        },
      }),
    }),
  }),
});

export const {
  useGetTopNewsQuery,
  useGetLastestNewsQuery,
  useGetSearchNewsQuery,
} = newsApi;
