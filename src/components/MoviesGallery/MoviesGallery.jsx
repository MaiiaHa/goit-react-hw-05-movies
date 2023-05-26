// import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieGalleryItem from 'components/MovieGalleryItem/MovieGalleryItem';
import css from './MoviesGallery.module.css';

const MoviesGallery = ({ movies }) => {
  // console.log(movies); // (12) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {

  return (
    <ul className={css.MoviesGallery}>
      {/* <!-- Набір <li> із зображеннями --> */}
      {movies.map(({ id, ...otherData }) => {
        console.log('id', id);
        return <MovieGalleryItem key={id} id={id} {...otherData} />;
      })}
    </ul>
  );
};

export default MoviesGallery;

MoviesGallery.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};
