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
        url: "trendingtopics",
        params: {
          mkt: "en-US",
          textFormat: "Raw",
          safeSearch: "Off",
          count: "1",
        },
      }),
      transformResponse: (response) => {
        return response.value
          ? { keyword: response.value[0].name }
          : { error: response.message };
      },
    }),
    getLastestNews: builder.query({
      query: () => ({
        url: "/",
        params: {
          count: "8",
          category: "ScienceAndTechnology",
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
