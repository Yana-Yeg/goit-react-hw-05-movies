import { useState, useEffect } from 'react';
import { useRouteMatch, Route, useParams, Link } from 'react-router-dom';
import { FetchMovieDetails } from 'utils/FetchApi';
import OneMovieCast from './OneMovieCast';
import OneMovieReviews from './OneMovieReviews';
import OneMovieViewDetails from './OneMovieViewDetails';

function OneMovieView() {
  const { movieId } = useParams();
  const { path } = useRouteMatch();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    FetchMovieDetails(Number(movieId)).then(data => setMovie(data));
  }, [movieId]);
  // console.log('movieDetails :>> ', movie);

  return (
    <>
      {movie && (
        <>
          <Link to="/" style={{ display: 'block', padding: '5px' }}>
            Go Back
          </Link>
          <OneMovieViewDetails movie={movie} />
          <Route path={`${path}/cast`}>
            <OneMovieCast movieId={movieId} />
          </Route>
          <Route path={`${path}/reviews`}>
            <OneMovieReviews movieId={movieId} />
          </Route>
        </>
      )}
    </>
  );
}

export default OneMovieView;
