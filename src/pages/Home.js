import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../api/Api';
import Button from '../components/Button';
import MoviesGallery from 'components/MoviesGallery/MoviesGallery';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    getTrendingMovies(activePage)
      .then(({ results, total_results }) => {
        setTotalResults(total_results);
        setMoviesList(prevRes => {
          return [...prevRes, ...results];
        });
      })
      .catch(err => console.log(err))
      .finally(setIsLoading(false));
  }, [activePage]);

  const renderMore = () => {
    setActivePage(activePage => activePage + 1);
  };

  return (
    <>
      {isLoading && <Loader />}
      <MoviesGallery movies={moviesList} />
      {totalResults > moviesList.length && (
        <Button aria-label="Load more" onClick={renderMore} />
      )}
    </>
  );
};

export default Home;
