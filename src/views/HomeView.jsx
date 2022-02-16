import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { GetMovies } from 'utils/FetchApi';
import ItemsPage from './ItemsPage';

function HomePage() {
  const [movies, setMovies] = useState(null);
  // const location = useLocation();

  useEffect(() => {
    GetMovies().then(data => {
      setMovies(data);
    });
  }, []);

  return (
    <div className="homeView_Wrapper">
      <h1>Tranding today</h1>
      <ul>{movies && <ItemsPage movies={movies} />}</ul>
    </div>
  );
}

export default HomePage;
