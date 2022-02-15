import { useState, useEffect, lazy, Suspense } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useRouteMatch, Route, useParams } from 'react-router-dom';
import { FetchMovieDetails } from 'utils/FetchApi';

const OneMovieCast = lazy(() =>
  import('./OneMovieCast.jsx' /* webpackChunkName :"one-movies-cast" */)
);
const OneMovieReviews = lazy(() =>
  import('./OneMovieReviews.jsx' /* webpackChunkName :"one-movies-reviews" */)
);
const OneMovieViewDetails = lazy(() =>
  import(
    './OneMovieViewDetails.jsx' /* webpackChunkName :"one-movie-details-page" */
  )
);

function OneMovieView() {
  const history = useHistory();
  const location = useLocation();
  const { movieId } = useParams();
  const { path } = useRouteMatch();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    FetchMovieDetails(Number(movieId)).then(data => setMovie(data));
  }, [movieId]);
  // console.log('movieDetails :>> ', movie);

  const handleGoBack = () => {
    history.push(location.state.from);
    // history.goBack();
  };
  return (
    <>
      {movie && (
        <>
          <button
            type="button"
            onClick={handleGoBack}
            style={{ display: 'block', margin: '5px' }}
          >
            Go Back
          </button>

          <Suspense fallback={<h1>LOADING...</h1>}>
            <OneMovieViewDetails movie={movie} />

            <Route path={`${path}/cast`}>
              <OneMovieCast movieId={movieId} />
            </Route>
            <Route path={`${path}/reviews`}>
              <OneMovieReviews movieId={movieId} />
            </Route>
          </Suspense>
        </>
      )}
    </>
  );
}

export default OneMovieView;
