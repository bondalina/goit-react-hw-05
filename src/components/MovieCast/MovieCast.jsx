import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCastMovie } from "../../pages/movies-api";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    async function fetchCast() {
      try {
        setLoading(true);
        const data = await getCastMovie(movieId);
        // console.log(data.cast);
        setCast(data.cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchCast();
  }, [movieId]);

  return (
    <div>
      {loading && <p>Loading cast...</p>}
      {error && <p>Error loading cast...</p>}
      {cast.length > 0 && (
        <ul>
          {cast.map((actor) => (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt={actor.name}
                width={200}
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;
