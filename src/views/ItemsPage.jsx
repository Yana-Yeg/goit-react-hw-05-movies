import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ItemsPage({ movies, children }) {
  const location = useLocation();
  return movies.map(el => (
    <li key={el.id}>
      <Link
        to={{
          pathname: '/movies/' + el.id,
          state: { from: location },
        }}
      >
        {el.original_title}
      </Link>
    </li>
  ));
}

export default ItemsPage;
