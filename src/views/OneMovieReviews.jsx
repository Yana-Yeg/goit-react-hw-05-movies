import { useEffect, useState } from 'react';
// import { useParams, NavLink } from 'react-router-dom';
import { FetchMovieReviews } from 'utils/FetchMovieReviews';

function OneMovieReviews({ movieId }) {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    FetchMovieReviews(Number(movieId)).then(data => setReviews(data));
  }, []);
  // console.log('reviews :>> ', reviews);

  return (
    <>
      <br />
      {reviews &&
        reviews.map(el => (
          <li key={el.author}>
            <h3>AUTHOR: {el.author}</h3>
            <p>{el.content}</p>
            {/* <Link to={`/movies/${el.id}`}>{el.original_title}</Link> */}
          </li>
        ))}
    </>
  );
}

export default OneMovieReviews;
