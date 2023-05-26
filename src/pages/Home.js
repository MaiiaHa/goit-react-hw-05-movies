import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../api/Api';
import Button from '../components/Button';
import MoviesGallery from 'components/MoviesGallery/MoviesGallery';

const Home = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    getTrendingMovies(activePage)
      .then(({ results }) =>
        setMoviesList(prevRes => {
          // console.log('data', prevRes);
          // console.log('data', results);
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
      <MoviesGallery movies={moviesList} />
      {/* <div>Home :{moviesList} </div> */}
      {isLoading && <Button aria-label="Load more" onClick={renderMore} />}
    </>
  );
};

export default Home;
