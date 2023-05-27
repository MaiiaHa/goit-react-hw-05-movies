import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Modal from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import css from './MovieGalleryItem.module.css';
import { IMAGE_URL } from '../../api/Api';

export default function MovieGalleryItem({
  id,
  poster_path,
  vote_average,
  title,
  name,
}) {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  const toggleModal = () => {
    setShowModal(state => !state);
  };

  return (
    <li className={css.MovieGalleryItem}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <img
          className={css.MovieGalleryItemImage}
          src={
            poster_path
              ? `${IMAGE_URL}${poster_path}`
              : 'There will be a poster'
          }
          alt={title || name}
          onClick={toggleModal}
        />
        <h2 className={css.MovieTitle}>{title || name}</h2>
        {vote_average !== 0 && (
          <p className={css.MovieRating}>{vote_average}</p>
        )}
        {showModal && (
          <Modal src={`${IMAGE_URL}${poster_path}`} onClose={toggleModal} />
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
