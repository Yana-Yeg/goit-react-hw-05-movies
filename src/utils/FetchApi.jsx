import axios from 'axios';
export * from '../utils/FetchApi';

const setParams = params =>
  (axios.defaults.params = {
    ...params,
    api_key: 'b2c3269bd358b01baf914c84972bca6a',
  });
//===================================================================
// /trending/get-trending список самых популярных фильмов на сегодня для создания коллекции на главной странице.
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
export const GetMovies = () => {
  setParams();
  return axios
    .get('/trending/movie/day')
    .then(res => {
      // console.log('res :>> ', res.data.results);
      return res.data.results;
    })
    .catch(err => {
      throw err;
    });
};

// /search/search-movies поиск кинофильма по ключевому слову на странице фильмов.
export const FetchMovieByName = query => {
  setParams({ query });
  return axios
    .get('/search/movie')
    .then(res => {
      // console.log('FetchMovieByName :>> ', res.data.results);
      return res.data.results;
    })
    .catch(err => {
      throw err;
    });
};

// /movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.
export const FetchMovieDetails = movie_id => {
  setParams({ movie_id });
  return axios
    .get(`/movie/${movie_id}`)
    .then(res => {
      // console.log('FetchMovieDetails :>> ', res.data);
      return res.data;
    })
    .catch(err => {
      throw err;
    });
};

// /movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма.
export const FetchMovieCast = movie_id => {
  setParams({ movie_id });
  return axios
    .get(`/movie/${movie_id}/credits`)
    .then(res => {
      // console.log('FetchMovieCast :>> ', res.data.cast);
      return res.data.cast;
    })
    .catch(err => {
      throw err;
    });
};

// /movies/get-movie-reviews запрос обзоров для страницы кинофильма.
export const FetchMovieReviews = movie_id => {
  setParams({ movie_id });
  return axios
    .get(`/movie/${movie_id}/reviews`)
    .then(res => {
      // console.log('FetchMovieReviews :>> ', res.data.results);
      return res.data.results;
    })
    .catch(err => {
      throw err;
    });
};
