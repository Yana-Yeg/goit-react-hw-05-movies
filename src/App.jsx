import { Redirect, Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Navigation } from 'components/Navigation/Navigation';

const HomeView = lazy(() =>
  import('./views/HomeView.jsx' /* webpackChunkName :"home-page" */)
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage.jsx' /* webpackChunkName :"movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage.jsx' /* webpackChunkName :"movie-details-page" */
  )
);

export default function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<h1>LOADING...</h1>}>
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
          <Redirect to="/" />
        </Switch>
      </Suspense>
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
