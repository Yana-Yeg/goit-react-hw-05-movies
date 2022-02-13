import axios from 'axios';
// https://api.themoviedb.org/3/search/movie?api_key=b2c3269bd358b01baf914c84972bca6a&language=en-US&page=1&include_adult=false&query=tom

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const setParams = query =>
  (axios.defaults.params = {
    query,
    api_key: 'b2c3269bd358b01baf914c84972bca6a',
  });

export const FetchMovieByName = query => {
  setParams(query);
  return axios
    .get('/search/movie')
    .then(res => {
      //   if (!res.data.hits.length) {
      //     throw new Error('Not found');
      //   }npm install react-router-dom
      console.log('FetchMovieByName :>> ', res.data.results);
      return res.data.results;
    })
    .catch(err => {
      throw err;
    });
};

// /trending/get-trending список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// /search/search-movies поиск кинофильма по ключевому слову на странице фильмов.
// /movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.
// /movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма.
// /movies/get-movie-reviews запрос обзоров для страницы кинофильма.
