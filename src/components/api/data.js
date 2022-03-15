const API_KEY = process.env.REACT_APP_API_KEY;

export default {
  fetchTrending: {
    name: `Trending`,
    url: `/trending/all/day?api_key=${API_KEY}`,
  },
  fetchTopRated: {
    name: `TopRated`,
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchAction: {
    name: `Action`,
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  },
  fetchcomedy: {
    name: `Comedy`,
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  },
  fetchHorror: {
    name: `Horror`,
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  },
  fetchRomance: {
    name: `Romance`,
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  },
  fetchMystery: {
    name: `Mystery`,
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=9648`,
  },
  fetchSciFi: {
    name: `Sci-Fi`,
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=878`,
  },
  fetchWestern: {
    name: `Western`,
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=37`,
  },
  fetchAnimation: {
    name: `Animation`,
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16`,
  },
  fetchTvmovie: {
    name: `Tvmovie`,
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10770`,
  },
};
