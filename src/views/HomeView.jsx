import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GetMovies } from 'utils/FetchApi';

function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    GetMovies().then(data => {
      setMovies(data);
    });
  }, []);

  return (
    <div className="homeView_Wrapper">
      <h1>Tranding today</h1>
      <ul>
        {movies &&
          movies.map(el => (
            <li key={el.id}>
              <Link to={`/movies/${el.id}`}>{el.original_title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default HomePage;
