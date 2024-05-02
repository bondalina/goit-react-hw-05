import css from "./HomePage.module.css";
import { useEffect, useState } from "react";
import { getMovies } from "../movies-api";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const data = await getMovies();
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div>
      <h1 className={css.homePageTitle}>Tranding today</h1>
      {error && <p>Oops! There was a problem, please reload page!</p>}
      {loading && <p>Please wait the page is loading...</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default HomePage;
