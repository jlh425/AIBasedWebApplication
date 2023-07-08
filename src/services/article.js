import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key", "a199b82d2amsh4693bf6bd668412p17b5cdjsn93d5d2801a0c");
      headers.set("X-RapidAPI-Host", "article-extractor-and-summarizer.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) =>
        `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=10&html=true&lang=en`,
    }),
  }),
});

export const { useLazyGetSummaryQuery} = articleApi;
