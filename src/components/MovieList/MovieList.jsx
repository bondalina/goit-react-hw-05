import { Link } from "react-router-dom";
import css from "./MovieList.module.css";
const MovieList = ({ movies }) => {
  return (
    <ul className={css.list}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
