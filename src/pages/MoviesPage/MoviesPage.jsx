import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { searchMovie } from "../movies-api";
import MovieFilter from "../../components/MovieFilter/MovieFilter";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  // const { movieId } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("query") ?? "";

  const changeQueryFilter = (newFilter) => {
    searchParams.set("query", newFilter);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const data = await searchMovie(queryParam);
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();
  }, [queryParam]);

  return (
    <div>
      <MovieFilter value={queryParam} onFilter={changeQueryFilter} />
      {error && <b>Oops! Please reload page!</b>}
      {loading && <b>Loading movies...</b>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
