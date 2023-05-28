import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MovieGalleryItem.module.css';
import { IMAGE_URL } from '../../api/Api';
import poster from '../../images/poster.webp';

export default function MovieGalleryItem({
  id,
  poster_path,
  vote_average,
  title,
  name,
}) {
  const location = useLocation();

  return (
    <li className={css.MovieGalleryItem}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <img
          className={css.MovieGalleryItemImage}
          src={poster_path ? `${IMAGE_URL}${poster_path}` : poster}
          alt={title || name}
        />
        <h2 className={css.MovieTitle}>{title || name}</h2>
        {vote_average !== 0 && (
          <p className={css.MovieRating}>{vote_average}</p>
        )}
      </Link>
    </li>
  );
}

MovieGalleryItem.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  poster_path: PropTypes.string,
  vote_average: PropTypes.number.isRequired,
};
