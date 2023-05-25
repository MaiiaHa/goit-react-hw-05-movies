import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../api/Api';
import Button from '../components/Button';
import MoviesGallery from 'components/MoviesGallery/MoviesGallery';
import Searchbar from 'components/Searchbar/Searchbar';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') ?? '';

  const [totalResults, setTotalResults] = useState(0);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    if (!search) {
      return;
    }

    searchMovies(search, activePage)
      .then(({ results, total_pages }) => {
        setMovies(prev => [...prev, ...results]);
        setTotalResults(total_pages);
      })
      .catch(err => console.log(err));
  }, [search, activePage]);

  // useMemo use !!!!!!!!!!!!!
  // const visibleMovies = movies.filter(movie => movie.includes(search));

  const updateQueryString = e => {
    setSearchParams({ search: e });
  };

  const renderMore = () => {
    setActivePage(activePage => activePage + 1);
  };

  return (
    <div>
      <Searchbar onSubmit={updateQueryString} />

      <MoviesGallery movies={movies} />

      {movies.length !== totalResults && movies.length !== 0 && (
        <Button aria-label="Load more" onClick={renderMore} />
      )}
    </div>
  );
};

export default Movies;
