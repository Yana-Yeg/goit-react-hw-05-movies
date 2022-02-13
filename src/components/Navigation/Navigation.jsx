import { NavLink } from 'react-router-dom';

export const Navigation = () => (
  <nav>
    <NavLink to="/" className="link">
      Home
    </NavLink>
    <NavLink to="/movies" className="link">
      Movies
    </NavLink>
  </nav>
);

// activeClassName = 'activeLink';
