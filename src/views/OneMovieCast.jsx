import { useEffect, useState } from 'react';
// import { useParams, NavLink } from 'react-router-dom';
import { FetchMovieCast } from 'utils/FetchMovieCast';

function OneMovieCast({ movieId }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    FetchMovieCast(Number(movieId)).then(data => setCast(data));
  }, []);
  console.log('movieCast :>> ', cast);

  return (
    <>
      <br />
      {cast &&
        cast.map(el => (
          <li key={el.id}>
            <img src={el.profile_path} alt={el.original_name} />
            <p>{el.name}</p>
            <p>Character: {el.character}</p>
            {/* <Link to={`/movies/${el.id}`}>{el.original_title}</Link> */}
          </li>
        ))}
    </>
  );
}

export default OneMovieCast;
