import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { getMovies } from "../movies-api";
import MovieFilter from "../../components/MovieFilter/MovieFilter";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("query") ?? "";
  // console.log(searchParams);

  const changeQueryFilter = (newFilter) => {
    searchParams.set("query", newFilter);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }
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

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) =>
      movie.original_title.toLowerCase().includes(queryParam.toLowerCase())
    );
  }, [queryParam, movies]);
  return (
    <div>
      <MovieFilter value={queryParam} onFilter={changeQueryFilter} />
      {error && <b>Oops! Please reload page!</b>}
      {loading && <b>Loading payments...</b>}
      {movies.length > 0 && <MovieList movies={filteredMovies} />}
    </div>
  );
};

export default MoviesPage;
