const API_KEY = process.env.REACT_APP_API_KEY;
const requests = {
  fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&include_adult=true&language=en-US&sort_by=popularity.desc&with_network=213`,
  fetchTopRatedMovies: `/discover/movie?api_key=${API_KEY}&include_adult=true&include_video=true&language=en-US&sort_by=popularity.desc&with_network=213`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&include_adult=true&include_video=true&language=en-US&sort_by=popularity.desc&with_network=213&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&include_adult=true&include_video=true&language=en-US&sort_by=popularity.desc&with_network=213&with_genres=27`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&include_adult=true&include_video=true&language=en-US&sort_by=popularity.desc&with_network=213&with_genres=28`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&include_adult=true&include_video=true&language=en-US&sort_by=popularity.desc&with_network=213&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&include_adult=true&include_video=true&language=en-US&sort_by=popularity.desc&with_network=213&with_genres=99`,
  fetchTvShow: `/discover/tv?api_key=${API_KEY}&include_adult=true&language=en-US&sort_by=popularity.desc`,
};
export default requests;
