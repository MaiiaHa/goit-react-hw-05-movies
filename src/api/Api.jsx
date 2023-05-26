// import axios from 'axios';

const KEY = '319d5522e2117aa6383989c80b35f4f5';

//====== img posters
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

//====== trending movies
export function getTrendingMovies(page = 1) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      // Authorization: 'Bearer 319d5522e2117aa6383989c80b35f4f5',
    },
  };

  return fetch(
    `https://api.themoviedb.org/3/trending/all/day?language=en-US&page=${page}&api_key=${KEY}`,
    options
  )
    .then(response => response.json())
    .catch(err => console.error(err));
}

//====== search movies
export function searchMovies(searchInput, page = 1) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      // Authorization: 'Bearer 319d5522e2117aa6383989c80b35f4f5',
    },
  };

  return fetch(
    `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&query=${searchInput}&page=${page}&api_key=${KEY}`,
    options
  )
    .then(response => response.json())
    .catch(err => console.error(err));
}

//====== movie details
export function renderMovieDetails(movie_id) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      // Authorization: 'Bearer 319d5522e2117aa6383989c80b35f4f5',
    },
  };

  return (
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US&api_key=${KEY}`,
      options
    )
      .then(response => response.json())
      // .then(response => console.log(response))
      .catch(err => console.error(err))
  );
}
//====== cast
export function renderCastDetails(movie_id) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      // Authorization: 'Bearer 319d5522e2117aa6383989c80b35f4f5',
    },
  };

  return (
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/credits?language=en-US&api_key=${KEY}`,
      options
    )
      .then(response => response.json())
      // .then(response => console.log(response))
      .catch(err => console.error(err))
  );
}
//====== reviews
export function renderReviewDetails(movie_id) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      // Authorization: 'Bearer 319d5522e2117aa6383989c80b35f4f5',
    },
  };

  return (
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/reviews?language=en-US&page=1&api_key=${KEY}`,
      options
    )
      .then(response => response.json())
      // .then(response => console.log(response))
      .catch(err => console.error(err))
  );
}
