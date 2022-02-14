import { useEffect, useState } from 'react';
import { FetchMovieCast } from 'utils/FetchApi';

function OneMovieCast({ movieId }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    FetchMovieCast(Number(movieId)).then(data => setCast(data));
  }, [movieId]);
  // console.log('movieCast :>> ', cast);

  return (
    <>
      <br />
      {cast &&
        cast.map(el => (
          <li key={el.id} className="oneMovie_item">
            <img
              src={`https://image.tmdb.org/t/p/w200/${el.profile_path}`}
              alt={el.original_name}
            />
            <p>{el.name}</p>
            <p>Character: {el.character}</p>
          </li>
        ))}
    </>
  );
}

export default OneMovieCast;
//<Link to={`/movies/${el.id}/cast`}>{el.original_title}</Link>
