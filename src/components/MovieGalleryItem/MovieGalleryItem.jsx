import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import css from './MovieGalleryItem.module.css';
import { IMAGE_URL } from '../../api/Api';

export default function MovieGalleryItem({
  poster_path,
  vote_average,
  title,
  name,
}) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(state => !state);
  };

  return (
    <li className={css.MovieGalleryItem}>
      <img
        className={css.MovieGalleryItemImage}
        src={
          poster_path ? `${IMAGE_URL}${poster_path}` : 'There will be a poster'
        }
        alt={title || name}
        onClick={toggleModal}
      />
      <h2>{title || name}</h2>
      <p>{vote_average}</p>
      {showModal && (
        <Modal src={`${IMAGE_URL}${poster_path}`} onClose={toggleModal} />
      )}
    </li>
  );
}

MovieGalleryItem.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  poster_path: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
};
