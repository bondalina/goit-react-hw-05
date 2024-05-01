import axios from "axios";

const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTQ4NGM3MjM5ZDczNmYxYmJhMGEwNTBkNGMzYTgxMiIsInN1YiI6IjY2MmQwNmVmNTExZDA5MDEyNGM0Y2NmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ww2R67mStD2eFG7rkzP-JyEIjDT-BsYxsMn-Y7MyiOE",
  },
};

export const getMovies = async () => {
  const response = await axios.get(url, options);
  console.log(response);
  return response.data.results;
};

export const getMovieById = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}`);
  return response.data.results;
};
