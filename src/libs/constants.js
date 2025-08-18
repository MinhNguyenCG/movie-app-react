export const TRENDING_TABS = [
  {
    id: "all",
    label: "All",
    url: "trending/all/day?language=en-US",
  },
  {
    id: "movie",
    label: "Movie",
    url: "trending/movie/day?language=en-US",
  },
  {
    id: "tv",
    label: "TV Show",
    url: "trending/tv/day?language=en-US",
  },
];

export const RATED_TABS = [
  {
    id: "movie",
    label: "Movie",
    url: "movie/top_rated?language=en-US&page=1",
  },

  {
    id: "tv",
    label: "TV Show",
    url: "tv/top_rated?language=en-US&page=1",
  },
];

export const GENDER_MAP = {
  0: "Unknown",
  1: "Female",
  2: "Male",
  3: "Non-binary",
};
