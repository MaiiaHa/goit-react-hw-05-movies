import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
  useEffect(() => {
    //http zapros
  }, []);
  return (
    <div>
      Movies :
      {['movie-01', 'movie-02', 'movie-03', 'movie-04', 'movie-05'].map(
        movie => {
          return (
            <Link key={movie} to={`${movie}`}>
              {/* // '/movies/:movieId' – компонент MovieDetails, сторінка з */}
              {/* детальною інформацією про кінофільм. */}
              {movie}
            </Link>
          );
        }
      )}
    </div>
  );
};

export default Movies;
