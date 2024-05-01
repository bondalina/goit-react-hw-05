import css from "./MovieCard.module.css";

const MovieCard = ({
  movie: { original_title, release_date, user_score, overview },
}) => {
  return (
    <div className={css.wrapper}>
      <p>{original_title}</p>
      <p>{release_date}</p>
      <p>
        <b>User Score:</b>
        {user_score}
      </p>
      <p>
        <b>Overview</b>
        {overview}
      </p>
      {/* <p>
        <b>Genres</b> {genres}
      </p> */}
    </div>
  );
};

export default MovieCard;
