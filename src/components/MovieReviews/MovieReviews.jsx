import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewMovie } from "../../pages/movies-api";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    async function fetchReviews() {
      try {
        setLoading(true);
        const data = await getReviewMovie(movieId);
        // console.log(data.results);
        setReviews(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, [movieId]);

  return (
    <div>
      {loading && <p>Loading reviews...</p>}
      {error && <p>Error loading reviews...</p>}
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry, we have no reviews for this movie.</p>
      )}
    </div>
  );
};

export default MovieReviews;
