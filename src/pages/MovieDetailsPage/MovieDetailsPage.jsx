import { Link, useParams, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect, useRef, Suspense } from "react";
import { getMovieById } from "../movies-api";
import MovieCard from "../../components/MovieCard/MovieCard";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  // console.log(location);
  const backLinkURLRef = useRef(location.state ?? "/");
  // console.log(backLinkURLRef);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const data = await getMovieById(movieId);
        setMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, [movieId]);

  return (
    <div>
      <div className={css.btnGoBack}>
        <Link to={backLinkURLRef.current}>Go back</Link>
      </div>

      {error && <b>Oops! Please reload page!</b>}
      {loading && <b>Page is loading...</b>}
      {movie && <MovieCard movie={movie} />}

      <p className={css.infoTitle}>Additional information</p>
      <ul>
        <li className={css.infoList}>
          <Link to="cast">Cast</Link>
        </li>
        <li className={css.infoList}>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>

      <Suspense fallback={<b>Please wait until loading</b>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
