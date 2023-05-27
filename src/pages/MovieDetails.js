// /movies/:movieId
import { Suspense, useRef, useEffect, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { renderMovieDetails } from '../api/Api';
import { IMAGE_URL } from '../api/Api';
import { format } from 'date-fns';
import css from './MovieDeatails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  //status_message if it was not fond games of trones 1399

  useEffect(() => {
    renderMovieDetails(movieId)
      .then(res => {
        setMovie(res);
      })
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <div className={css.Box}>
      <div className={css.Details}>
        <div>
          <Link to={backLinkLocationRef.current} className={css.BackLink}>
            Go back
          </Link>
          <img
            className={css.MovieImg}
            src={`${IMAGE_URL}${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div>
          <ul>
            <li>
              <h1>
                {movie.title}
                <span>
                  (
                  {movie.release_date
                    ? format(new Date(movie.release_date), 'yyyy')
                    : ''}
                  )
                </span>
              </h1>
            </li>
            <li>Rating: {movie.vote_average}</li>
            <li>
              <h3>Ganres</h3>
              <p>{movie.genres?.map(({ name }) => name).join(', ')}</p>
            </li>
            <li>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </li>
            <li>
              <h3>Runtime:</h3>
              <p> {movie.runtime}</p>
            </li>
          </ul>
        </div>
      </div>

      <h2>Aditional information</h2>
      {/* ---------------------- */}
      <ul className={css.AdditionalInfo}>
        <li>
          <Link to="cast">cast</Link>
        </li>
        <li>
          <Link to="reviews">reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>LOADING subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieDetails;
