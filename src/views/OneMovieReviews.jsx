import { useEffect, useState } from 'react';
import { FetchMovieReviews } from 'utils/FetchApi';

function OneMovieReviews({ movieId }) {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    FetchMovieReviews(Number(movieId)).then(data => setReviews(data));
  }, [movieId]);
  // console.log('reviews :>> ', reviews);

  return (
    <>
      <br />
      {reviews &&
        (reviews.length > 0 ? (
          reviews.map(el => (
            <li key={el.author} className="oneMovie_item">
              <h3>AUTHOR: {el.author}</h3>
              <p>{el.content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie</p>
        ))}
    </>
  );
}

export default OneMovieReviews;
{
  /* <Link to={`/movies/${el.id}`}>{el.original_title}</Link> */
}
