//http://localhost:3000/goit-react-hw-05-movies/movies/movie-03/reviews

import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  console.log(movieId);

  // useEffect(() => {
  // //http zapros
  // }, [input])

  return <div>Reviews request {movieId}</div>;
};
export default Reviews;
