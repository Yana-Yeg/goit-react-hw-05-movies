import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FetchMovieByName } from 'utils/FetchMovieByName';

function MoviesView() {
  const { movieId } = useParams();
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);

  const handleQueryChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      alert('need query');
      return;
    }
    FetchMovieByName(query).then(data => setMovies(data));
    setQuery('');
  };

  return (
    <>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleQueryChange}
          style={{ width: '200px', marginLeft: '20px' }}
        />
        <button type="submit">Search</button>
      </form>
      {movies &&
        movies.map(el => (
          <li key={el.id}>
            <Link to={`/movies/${el.id}`}>{el.original_title}</Link>
          </li>
        ))}
    </>
  );
}

export default MoviesView;
