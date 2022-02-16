import { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import qs from 'query-string';
import { FetchMovieByName } from 'utils/FetchApi';
import Form from './Form';
import ItemsPage from './ItemsPage';

function MoviesPage() {
  const history = useHistory();
  const location = useLocation();
  const { query } = qs.parse(location.search);
  // console.log('queryS', queryS);

  const [movies, setMovies] = useState(null);
  const [err, setErr] = useState(null);

  const setSearch = input => {
    history.push({ pathname: '/movies', search: '?query=' + input }); //обновился query
  };

  useEffect(() => {
    setErr(null);
    setMovies([]);
    query &&
      FetchMovieByName(query)
        .then(data => setMovies(data))
        .catch(error => setErr(error.message));
  }, [query]);

  return (
    <>
      <br />
      <Form setSearch={setSearch} />
      {err && <h1>Not found</h1>}
      <ul className="moviesPage_list">
        {movies && <ItemsPage movies={movies} />}
      </ul>
    </>
  );
}

export default MoviesPage;
