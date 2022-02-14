import { Route, Switch } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import HomeView from 'views/HomeView';
import MoviesPage from 'views/MoviesPage';
import MovieDetailsPage from 'views/MovieDetailsPage';

export default function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
        <Route path="/movies">
          <MoviesPage />
        </Route>
      </Switch>
    </>
  );
}

//  <Switch>
//   <Route path="/" exact element={<HomeView />} />
// <Route path="/movies" element={<MoviesView />} />
// <Route path="/movies/:movieId" exact element={<OneMovieView />} />
//  </Switch>;

//  <Routes>
//    <Route path="/" exact element={<HomeView />} />
//    <Route path="/movies" element={<MoviesView />} />
//    <Route path="/movies/:movieId" exact element={<OneMovieView />} />
//  </Routes>;
