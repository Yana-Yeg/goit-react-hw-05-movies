import axios from 'axios';
// https://api.themoviedb.org/3/movie/444444?api_key=b2c3269bd358b01baf914c84972bca6a&language=en-US&page=1&include_adult=false&query=tom

// axios.defaults.baseURL = 'https://api.themoviedb.org/3';
// const setParams = movie_id =>
//   (axios.defaults.params = {
//     movie_id,
//     api_key: 'b2c3269bd358b01baf914c84972bca6a',
//   });

// export const FetchMovieDetails = movie_id => {
//   setParams(movie_id);
//   return axios
//     .get('/movie/{movie_id}')
//     .then(res => {
//       //   if (!res.data.hits.length) {
//       //     throw new Error('Not found');
//       //   }npm install react-router-dom
//       console.log('FetchMovieByName :>> ', res.data.results);
//       return res.data.results;
//     })
//     .catch(err => {
//       throw err;
//     });
// };

// /trending/get-trending список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// /search/search-movies поиск кинофильма по ключевому слову на странице фильмов.
// /movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.
// /movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма.
// /movies/get-movie-reviews запрос обзоров для страницы кинофильма.

export async function FetchMovieCast(movie_id) {
  try {
    const KEY = 'b2c3269bd358b01baf914c84972bca6a';
    const BASE_URL = 'https://api.themoviedb.org/3';
    const response = await axios.get(
      `${BASE_URL}/movie/${movie_id}/credits?api_key=${KEY}`
    );
    console.log('FetchMovieCast :>> ', response.data.cast);
    return response.data.cast;
  } catch (error) {
    console.error(error);
  }
}
