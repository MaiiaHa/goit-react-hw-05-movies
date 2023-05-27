import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout';
// import NotFound from 'path/to/pages/NotFound';

const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies'));
const MovieDetails = lazy(() => import('../../pages/MovieDetails'));
const Reviews = lazy(() => import('../Reviews'));
const Cast = lazy(() =>
  import('../Cast/Cast').then(module => ({ ...module, default: module.Cast }))
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<div>Page not found</div>} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
};
