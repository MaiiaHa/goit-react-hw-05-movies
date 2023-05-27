import PropTypes from 'prop-types';
import MovieGalleryItem from 'components/MovieGalleryItem/MovieGalleryItem';
import css from './MoviesGallery.module.css';

const MoviesGallery = ({ movies }) => {
  return (
    <ul className={css.MoviesGallery}>
      {movies.map(({ id, ...otherData }) => {
        return <MovieGalleryItem key={id} id={id} {...otherData} />;
      })}
    </ul>
  );
};

export default MoviesGallery;

MoviesGallery.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};
