import axios from 'axios';
// https://api.themoviedb.org/3/movie/550?api_key=b2c3269bd358b01baf914c84972bca6a
//api.themoviedb.org/3/movie/550?api_key=b2c3269bd358b01baf914c84972bca6a&callback=test

https: axios.defaults.baseURL = ' https://api.themoviedb.org/3/movie/';
const setParams = ({}) =>
  (axios.defaults.params = {
    // q,
    api_key: 'b2c3269bd358b01baf914c84972bca6a',
    callback: 'test',
  });

export const fetch = () => {
  setParams({});
  return axios
    .get('550')
    .then(res => {
      //   if (!res.data.hits.length) {
      //     throw new Error('Not found');
      //   }npm install react-router-dom
      console.log('res :>> ', res);
      return res;
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
