//http://localhost:3000/goit-react-hw-05-movies/movies/movie-03/reviews

import { useParams } from 'react-router-dom';
import { renderReviewDetails } from '../api/Api';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Loader } from './Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewesList, setReviewesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    renderReviewDetails(movieId)
      .then(({ results, total_results }) => setReviewesList([...results]))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  if (reviewesList.length === 0)
    return <div>There is no information for this movie</div>;

  return (
    <div>
      <h2>Reviews</h2>
      {isLoading && <Loader />}
      <ul>
        {reviewesList.map(({ author, created_at, updated_at, content, id }) => {
          return (
            <li key={id}>
              <h3>
                Autor: {author} -{' '}
                {format(new Date(created_at), 'MMMM, dd yyyy ')}
                {updated_at
                  ? ` (updated on ${format(
                      new Date(updated_at),
                      'MMMM, dd yyyy '
                    )})`
                  : ''}
              </h3>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Reviews;
