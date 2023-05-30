import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../api/Api';
import Button from '../components/Button';
import MoviesGallery from 'components/MoviesGallery/MoviesGallery';
import Searchbar from 'components/Searchbar/Searchbar';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') ?? '';
  const page = searchParams.get('page') ?? '';

  const [totalResults, setTotalResults] = useState(0);
  const [activePage, setActivePage] = useState(1);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!search) {
      return;
    }
    setIsLoading(true);
    searchMovies(search, page)
      .then(({ results, total_pages }) => {
        setMovies(prev => [...prev, ...results]);
        setTotalResults(total_pages);
      })
      .catch(err => console.log(err))
      .finally(setIsLoading(false));
  }, [search, page]);

  const updateQueryString = e => {
    setSearchParams({ search: e, page: activePage });

    setMovies([]);
    setActivePage(1);

    console.log(e);
    console.log(activePage);
  };

  const renderMore = () => {
    setActivePage(activePage => activePage + 1);
    setSearchParams({ search: search, page: activePage + 1 });
  };

  return (
    <div>
      {isLoading && <Loader />}
      <Searchbar onSubmit={updateQueryString} />

      <MoviesGallery movies={movies} />

      {movies.length !== totalResults && movies.length !== 0 && (
        <Button aria-label="Load more" onClick={renderMore} />
      )}
    </div>
  );
};

export default Movies;
