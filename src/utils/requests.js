const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
console.log(API_KEY);
const requests = {
  fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRatedMovies: `/discover/movie?api_key=${API_KEY}&language=en-US`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  fetchAnimation: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16`,
  fetchFantasy: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=14`,
  fetchTvShow: `/discover/tv?api_key=${API_KEY}&language=en-US&page=1`,
};
export default requests;
