export const TRENDING_TABS = [
  {
    id: "all",
    label: "All",
    url: "https://api.themoviedb.org/3/trending/all/day?language=en-US",
  },
  {
    id: "movie",
    label: "Movie",
    url: "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
  },
  {
    id: "tv",
    label: "TV Show",
    url: "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
  },
];

export const RATED_TABS = [
  {
    id: "movie",
    label: "Movie",
    url: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  },

  {
    id: "tv",
    label: "TV Show",
    url: "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
  },
];
