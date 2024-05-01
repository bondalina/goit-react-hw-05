// import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MoviesDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import MovieCast from "./components/MovieCast/MovieCast";
import MovieReviews from "./components/MovieReviews/MovieReviews";

// const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
// const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
// const MoviesDetailsPage = lazy(() =>
//   import("./pages/MovieDetailsPage/MovieDetailsPage")
// );
// // const MovieCast = lazy(() => import("./components/MovieCast"));
// // const MovieReviews = lazy(() =>
// //   import("./components/MovieReviews/MovieReviews")
// // );
// const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:moviesId" element={<MoviesDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
