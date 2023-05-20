//============== moovie
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Layout from 'components/Layout';
// import Home from 'path/to/pages/Home';
// import Movies from 'path/to/pages/About';
// import NotFound from 'path/to/pages/NotFound';

// '/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
// '/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
// '/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
// /movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
// /movies/:movieId/reviews – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails.

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />} />
        <Route path="movies/:movieId/cast" element={<div>Cast</div>} />
        <Route path="movies/:movieId/reviews" element={<div>Reviews</div>} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
};
//===============
// import { useState, useEffect } from 'react';
// import Notiflix from 'notiflix'; // all modules
// import { fetchInput } from '../../api/Api';
// import css from './App.module.css';
// // import { ImSpinner } from 'react-icons/im';

// import Button from '../Button/Button';
// import Searchbar from '../Searchbar/Searchbar';
// import ImageGallery from '../ImageGallery/ImageGallery';
// import { Loader } from 'components/Loader/Loader';
// // import { toast } from 'react-toastify';

// const Status = {
//   IDLE: 'idle',
//   PENDING: 'pending',
//   RESOLVED: 'resolved',
//   REJECTED: 'rejected',
// };

// export default function App() {
//   const [value, setValue] = useState('');
//   const [pictures, setPictures] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [status, setStatus] = useState(Status.IDLE);
//   const [totalHits, setTotalHits] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!value) {
//       return;
//     }

//     setStatus(Status.PENDING);

//     fetchInput(value, currentPage)
//       .then(({ hits, total, totalHits }) => {
//         if (totalHits === 0) {
//           Notiflix.Notify.failure(
//             'There is no images for this request. Please enter your new search request.'
//           );
//           return;
//         }
//         setPictures(pictures => [...pictures, ...hits]);
//         setTotalHits(totalHits);
//         setStatus(Status.RESOLVED);
//         if (currentPage === 1) {
//           Notiflix.Notify.success(`We found ${total} images`);
//         }
//       })
//       .catch(error => {
//         setError(error);
//         setStatus(Status.REJECTED);
//         // toast.error('Error');
//         Notiflix.Notify.failure(error.message);
//       });
//   }, [currentPage, value]);

//   const onFormSubmit = input => {
//     if (value !== input) {
//       setValue(input);
//       setPictures([]);
//       setCurrentPage(1);
//       setStatus(Status.IDLE);
//       setTotalHits(null);
//       setError(null);
//     }
//   };

//   const renderMorePic = () => {
//     setCurrentPage(currentPage => currentPage + 1);
//   };

//   return (
//     <div className={css.App}>
//       <Searchbar onSubmit={onFormSubmit} />
//       {status === Status.IDLE && <div>Please enter your search request</div>}
//       {status === Status.PENDING && (
//         <div className={css.spinner}>
//           {/* <ImSpinner size={32} className="iconSpin" />  */}
//           {/* Loading... */}
//           <Loader />
//         </div>
//       )}
//       {status === Status.REJECTED && <div>{error.message}</div>}
//       <ImageGallery photos={pictures} />
//       {status === Status.RESOLVED &&
//         pictures.length !== totalHits &&
//         pictures.length !== 0 && (
//           <Button aria-label="Load more" onClick={renderMorePic} />
//         )}
//       {/* <ToastContainer autoClose={3000} /> */}
//     </div>
//   );
// }
