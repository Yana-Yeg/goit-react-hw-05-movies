import { Routes, Route } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import HomeView from 'views/HomeView';
import MoviesView from 'views/MoviesView';
import OneMovieView from 'views/OneMovieView';

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<HomeView />} />
        <Route path="/movies" element={<MoviesView />} />
        <Route path="/movies/:movieId" exact element={<OneMovieView />} />
      </Routes>
    </>
  );
}
//  <Routes>
//    <Route path="/" exact>
//      <HomeView />
//    </Route>
//    <Route path="/movies">
//      <MoviesView />
//    </Route>
//  </Routes>;
