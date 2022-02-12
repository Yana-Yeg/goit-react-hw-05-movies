import { Routes, Route } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import HomeView from 'utils/views/HomeView';
import MoviesView from 'utils/views/MoviesView';

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/movies" element={<MoviesView />} />
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
