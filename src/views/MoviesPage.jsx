import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FetchMovieByName } from 'utils/FetchApi';

function MoviesPage() {
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
          className="moviesPage_input"
        />
        <button type="submit">Search</button>
      </form>
      {movies && (
        <ul className="moviesPage_list">
          {movies.map(el => (
            <li key={el.id}>
              <Link to={`/movies/${el.id}`}>{el.original_title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default MoviesPage;
