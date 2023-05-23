import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([
    'movie-01',
    'movie-02',
    'movie-03',
    'movie-04',
    'movie-05',
  ]);
  console.log(setMovies);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const movieId = searchParams.get('movieId') ?? '';
  // console.log(searchParams.get('a'));

  useEffect(() => {
    //http zapros
  }, []);

  const updateQueryString = e => {
    const movieIdValue = e.target.value;

    const movieIdSearch = movieIdValue !== '' ? { movieId: movieIdValue } : {};
    setSearchParams(movieIdSearch);
    // if (movieIdValue === '') {
    //   return setSearchParams({});
    // }
    // setSearchParams({ movieId: movieIdValue });
  };

  const visibleMovies = movies.filter(movie => movie.includes(movieId));
  console.log(location);
  return (
    <div>
      <input type="text" value={movieId} onChange={updateQueryString}></input>
      <button type="" onClick={() => setSearchParams({ c: 'hello' })}>
        change search params
      </button>
      <ul>
        Movies :
        {visibleMovies.map(movie => {
          return (
            <li>
              <Link key={movie} to={`${movie}`} state={{ from: location }}>
                {/* // '/movies/:movieId' – компонент MovieDetails, сторінка з */}
                {/* детальною інформацією про кінофільм. */}
                {movie}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
