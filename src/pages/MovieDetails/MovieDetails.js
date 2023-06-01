// /movies/:movieId
import { Suspense, useRef, useEffect, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { renderMovieDetails } from '../../api/Api';
import { IMAGE_URL } from '../../api/Api';
import { format } from 'date-fns';
import css from './MovieDeatails.module.css';
import { Loader } from 'components/Loader/Loader';
import { FaChevronLeft } from 'react-icons/fa';
import poster from '../../images/poster.webp';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const [isLoading, setIsLoading] = useState(false);

  //status_message if it was not fond games of trones 1399

  useEffect(() => {
    setIsLoading(true);

    renderMovieDetails(movieId)
      .then(res => {
        setMovie(res);
      })
      .catch(err => console.log(err))
      .finally(setIsLoading(false));
  }, [movieId]);

  if (!movie) return;

  return (
    <section className={css.Box}>
      <div className={css.Details}>
        <div className={css.Image}>
          <img
            className={css.MovieImg}
            src={
              movie.poster_path ? `${IMAGE_URL}${movie.poster_path}` : poster
            }
            alt={movie.title}
          />
        </div>
        <div className={css.MovieInfo}>
          <Link to={backLinkLocationRef.current} className={css.BackLink}>
            <FaChevronLeft width={20} height={20} />
            Go back
          </Link>

          <ul className={css.MovieData}>
            <li>
              <h1>
                {movie.title}
                <span>
                  (
                  {movie.release_date
                    ? format(new Date(movie.release_date), 'yyyy')
                    : 'no info'}
                  )
                </span>
              </h1>
            </li>
            <li>
              <h3>Rating </h3>
              <p>{movie.vote_average ? movie.vote_average : 'no info'}</p>
            </li>
            <li>
              <h3>Ganres</h3>
              <p>{movie?.genres?.map(({ name }) => name).join(', ')}</p>
            </li>
            <li>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </li>
            <li>
              <h3>Runtime</h3>
              <p> {movie?.runtime}</p>
            </li>
            <li>
              <h2>Aditional information</h2>
              <ul className={css.AdditionalInfo}>
                <li>
                  <Link to="cast">actors</Link>
                </li>
                <li>
                  <Link to="reviews">reviews</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <Suspense fallback={isLoading && <Loader />}>
        <Outlet />
      </Suspense>
    </section>
  );
};
export default MovieDetails;
