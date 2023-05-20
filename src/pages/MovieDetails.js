// /movies/:movieId
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);

  // useEffect(() => {
  //http zapros
  //state is loading error
  // }, []);

  return <>MovieDetails</>;
};
export default MovieDetails;
