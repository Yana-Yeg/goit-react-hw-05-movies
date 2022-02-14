import { NavLink } from 'react-router-dom';

export const Navigation = () => (
  <nav style={{ borderBottom: '2px solid lightgrey' }}>
    <NavLink to="/" exact className="link" activeClassName="activeLink">
      Home
    </NavLink>
    <NavLink to="/movies" className="link" activeClassName="activeLink">
      Movies
    </NavLink>
  </nav>
);
