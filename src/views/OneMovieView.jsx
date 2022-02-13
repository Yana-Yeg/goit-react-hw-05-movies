import { useState, useEffect } from 'react';
import { useRouteMatch, useLocation, Routes, Route } from 'react-router-dom';
import { useParams, NavLink } from 'react-router-dom';
import { FetchMovieDetails } from 'utils/FetchMovieDetails';
import OneMovieCast from './OneMovieCast';
import OneMovieReviews from './OneMovieReviews';

function OneMovieView() {
  const { movieId } = useParams();
  // const { url } = useRouteMatch();
  const { pathname } = useLocation();

  const [movie, setMovie] = useState(null);
  console.log('movieId :>> ', movieId);
  useEffect(() => {
    FetchMovieDetails(Number(movieId)).then(data => setMovie(data));
  }, []);
  console.log('movieDetails :>> ', movie);

  return (
    <>
      {/* <p>{movieId}</p> */}
      {movie && (
        <>
          {/* <Routes> */}
          {/* <Route path="/" exact> */}
          <button type="button">Go Back</button>
          {/* </Route> */}
          <div key={movie.id}>
            <img src={movie.poster_path} alt={movie.original_title} />
            <h1>{movie.original_title}</h1>
            <p>User scores: {movie.vote_average}</p>

            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
            <p>{movie.genres[0].name}</p>
            <hr />
            <h2>Additional information</h2>
            {/* <NavLink to={`/${url}/${movie.id}`}>Cast:</NavLink> */}
            {/* <NavLink to={`/${pathname}/${movie.id}`}>Cast:</NavLink> */}
          </div>

          {/* <Route path="/movies/:movieId/cast"> */}
          <OneMovieCast movieId={movieId} />
          {/* </Route> */}
          {/* <Route path="/movies/:movieId/reviews"> */}
          <OneMovieReviews movieId={movieId} />
          {/* </Route> */}
          {/* </Routes> */}
        </>
      )}
    </>
  );
}

export default OneMovieView;
