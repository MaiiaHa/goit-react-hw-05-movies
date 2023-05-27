// /movies/:movieId
import { Suspense, useRef, useEffect, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { renderMovieDetails } from '../api/Api';
import { IMAGE_URL } from '../api/Api';
import { format } from 'date-fns';

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
    <>
      <Link to={backLinkLocationRef.current}> Go back </Link>
      <img src={`${IMAGE_URL}${movie.poster_path}`} alt={movie.title} />
      <ul>
        <li>
          <h1>
            {movie.title} |
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
          <p>Runtime: {movie.runtime}</p>
        </li>
      </ul>

      <h2>Aditional information</h2>
      {/* ---------------------- */}
      <ul>
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
    </>
  );
};
export default MovieDetails;
