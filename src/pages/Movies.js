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
    //   const options = {
    //     method: 'GET',
    //     headers: {
    //       accept: 'application/json',
    //       Authorization: 'Bearer 319d5522e2117aa6383989c80b35f4f5',
    //     },
    //   };
    //   fetch(
    //     'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    //     options
    //   )
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));
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
  // console.log(location);

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
            <li key={movie}>
              <Link to={`${movie}`} state={{ from: location }}>
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
