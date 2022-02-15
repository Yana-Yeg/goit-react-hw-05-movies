import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { GetMovies } from 'utils/FetchApi';

function HomePage() {
  const [movies, setMovies] = useState(null);
  const location = useLocation();

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
              <Link
                // to={`/movies/${el.id}`}
                to={{
                  pathname: '/movies/' + el.id,
                  state: { from: location },
                }}
              >
                {el.original_title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default HomePage;
