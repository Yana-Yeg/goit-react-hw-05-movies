import { useEffect, useState } from 'react';
import { fetch } from 'utils/fetch';

export default HomeView => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetch().then(setMovies).finally(console.log('object :>> ', movies));
  }, []);
  return (
    <>
      <h1>Tranding today</h1>
    </>
  );
};
