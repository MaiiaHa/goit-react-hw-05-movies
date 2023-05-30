// import axios from 'axios';

const KEY = '319d5522e2117aa6383989c80b35f4f5';
const URL = 'https://api.themoviedb.org/3';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    // Authorization: 'Bearer 319d5522e2117aa6383989c80b35f4f5',
  },
};

//====== img posters
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export function getTrendingMovies(page = 1) {
  return fetch(
    `${URL}/trending/all/day?language=en-US&page=${page}&api_key=${KEY}`,
    options
  ).then(response => {
    if (!response.ok) {
      return Promise.reject(
        new Error(`There are not images in trending films`)
      );
    }
    return response.json();
  });
}

export function searchMovies(searchInput, page = 1) {
  return fetch(
    `${URL}/search/movie?include_adult=false&language=en-US&query=${searchInput}&page=${page}&api_key=${KEY}`,
    options
  ).then(response => {
    if (!response.ok) {
      return Promise.reject(
        new Error(`There are not images for ${searchInput} search request`)
      );
    }
    return response.json();
  });
}

export function renderMovieDetails(movie_id) {
  return fetch(
    `${URL}/movie/${movie_id}?language=en-US&api_key=${KEY}`,
    options
  ).then(response => {
    if (!response.ok) {
      return Promise.reject(new Error(`There are not movie data`));
    }
    return response.json();
  });
}

export function renderCastDetails(movie_id) {
  return fetch(
    `${URL}/movie/${movie_id}/credits?language=en-US&api_key=${KEY}`,
    options
  ).then(response => {
    if (!response.ok) {
      return Promise.reject(new Error(`There are not cast data`));
    }
    return response.json();
  });
}

export function renderReviewDetails(movie_id) {
  return fetch(
    `${URL}/movie/${movie_id}/reviews?language=en-US&page=1&api_key=${KEY}`,
    options
  ).then(response => {
    if (!response.ok) {
      return Promise.reject(new Error(`There are not review data`));
    }
    return response.json();
  });
}
