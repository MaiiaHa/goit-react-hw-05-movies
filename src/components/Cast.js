//http://localhost:3000/goit-react-hw-05-movies/movies/movie-03/cast

import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();
  console.log(movieId);

  // useEffect(() => {
  // //http zapros
  // }, [input])

  return <div>Cast request: {movieId}</div>;
};
