//http://localhost:3000/goit-react-hw-05-movies/movies/movie-03/cast

import { useParams } from 'react-router-dom';
import { renderCastDetails, IMAGE_URL } from '../../api/Api';
import { useEffect, useState } from 'react';
import css from '../Cast/Cast.module.css';
import { Loader } from 'components/Loader/Loader';
import person from '../../images/person-icon.png';

export const Cast = () => {
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    renderCastDetails(movieId)
      .then(({ cast }) => setCastList(cast))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  if (castList.length === 0)
    return <div>There is no information for this movie</div>;

  return (
    <div>
      <h2>Casts</h2>
      {isLoading && <Loader />}

      <ul className={css.CastGallery}>
        {castList.map(({ profile_path, name, character, cast_id }) => {
          return (
            <li key={cast_id} className={css.CastGalleryItem}>
              <img
                className={css.CastGalleryItemImage}
                src={profile_path ? `${IMAGE_URL}${profile_path}` : person}
                alt={name}
              />
              <h2 className={css.CastInfo}>{name}</h2>
              <p className={css.CastInfo}>{character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
