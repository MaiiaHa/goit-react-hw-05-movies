//http://localhost:3000/goit-react-hw-05-movies/movies/movie-03/cast

import { useParams } from 'react-router-dom';
import { renderCastDetails, IMAGE_URL } from '../api/Api';
import { useEffect, useState } from 'react';

export const Cast = () => {
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);

  // console.log(movieId);

  useEffect(() => {
    renderCastDetails(movieId).then(({ cast }) =>
      setCastList(prevData => [...cast])
    );
  }, [movieId]);

  return (
    <div>
      <h2>Casts</h2>
      <ul className="cast">
        {castList.map(({ profile_path, name, character, cast_id }) => {
          return (
            <li key={cast_id}>
              <img
                src={
                  profile_path
                    ? `${IMAGE_URL}${profile_path}`
                    : 'There will be an image'
                }
                alt={name}
              />
              <h2>{name}</h2>
              <p>{character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
