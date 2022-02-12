import { NavLink } from 'react-router-dom';

export const Navigation = () => (
  <>
    <NavLink to="/" className="link">
      Home
    </NavLink>
    <NavLink to="/movies" className="link">
      Movies
    </NavLink>
  </>
);

// activeClassName = 'activeLink';
