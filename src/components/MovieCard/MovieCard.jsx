// import css from "./MovieCard.module.css";

const MovieCard = ({
  movie: { original_title, poster_path, release_date, vote_average, overview },
}) => {
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";
  return (
    <div>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : defaultImg
        }
        width={250}
        alt="poster"
      />
      <p>{original_title}</p>
      <p>{release_date}</p>
      <p>
        <b>User Score:</b>
        {vote_average}
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
