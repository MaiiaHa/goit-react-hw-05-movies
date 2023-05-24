import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../api/Api';
import Button from '../components/Button';

const Home = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    getTrendingMovies(activePage)
      .then(({ page, results }) =>
        setMoviesList(prevRes => {
          return [...prevRes, ...results];
        })
      )
      .catch(err => console.log(err))
      .finally(setLoading(true));
  }, [activePage]);

  const renderMore = () => {
    setActivePage(activePage => activePage + 1);
  };

  return (
    <>
      <div>Home :{moviesList} </div>
      {isLoading && <Button aria-label="Load more" onClick={renderMore} />}
    </>
  );
};

export default Home;
