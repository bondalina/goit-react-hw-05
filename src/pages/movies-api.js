import axios from "axios";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTQ4NGM3MjM5ZDczNmYxYmJhMGEwNTBkNGMzYTgxMiIsInN1YiI6IjY2MmQwNmVmNTExZDA5MDEyNGM0Y2NmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ww2R67mStD2eFG7rkzP-JyEIjDT-BsYxsMn-Y7MyiOE",
  },
};

// Для відображення спску фільмів (HomePage)
export const getMovies = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?language=en-US`,
    options
  );
  // console.log(response);
  return response.data.results;
};

// Для пошуку фільма (MoviesPage)
export const searchMovie = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie`,
    options
  );
  // console.log(response);
  return response.data.results;
};

// Для детальної інформації про фільм (MovieDetailsPage)
export const getMovieById = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    options
  );
  // console.log(response);
  return response.data;
};

// Для інформації про акторський склад (MovieDetailsPage)
export const getCastMovie = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    options
  );
  // console.log(response);
  return response.data;
};

// Для ревью (MovieDetailsPage)
export const getReviewMovie = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    options
  );
  // console.log(response);
  return response.data;
};
