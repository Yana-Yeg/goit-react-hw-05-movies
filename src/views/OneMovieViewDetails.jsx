import { useRouteMatch, Link } from 'react-router-dom';

function OneMovieViewDetails({ movie }) {
  const { url } = useRouteMatch();
  const genresArr = movie.genres.map(el => el.name).join(' ');

  return (
    <>
      <div>
        <div key={movie.id} className="oneMovieViewDetails_wrap">
          {/* <Link
              path={`/movies/${movieId}`}
              className=""
              style={{ color: 'blue' }}
            >
            </Link> */}
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.original_title}
          />
          <div style={{ marginLeft: '20px', fontSize: '18px' }}>
            <h1>{movie.original_title}</h1>
            <p>User scores: {movie.vote_average}</p>

            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
            <p>{genresArr}</p>
          </div>
        </div>
        <hr />

        <h2>Additional information</h2>
        <Link to={`${url}/cast`} className="OneMovieViewDetails_link">
          Cast:
        </Link>
        <Link to={`${url}/reviews`} className="OneMovieViewDetails_link">
          Reviews:
        </Link>
      </div>
    </>
  );
}

export default OneMovieViewDetails;
