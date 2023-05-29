import "../styles/Card.css";

function Cards({
  poster_path,
  vote_average,
  title,
  duration,
  genre,
  release_date,
  overview,
}) {
  const url = `https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`;
  const rating = vote_average * 10;
  return (
    <>
      <div
        className="movie-card"
        style={{
          background: `url(${url})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div
          className="rating"
          style={{
            backgroundColor: `${
              rating / 10 >= 5.0 && rating / 10 <= 5.9
                ? "#D9AD00"
                : rating / 10 >= 6.0 && rating / 10 <= 6.9
                ? "#D9AD00"
                : rating / 10 >= 7.0 && rating / 10 <= 7.9
                ? "#00D900"
                : rating / 10 >= 8.0 && rating / 10 <= 8.9
                ? "#00D900"
                : rating / 10 >= 9.0 && rating / 10 <= 10.0
                ? "#00D900"
                : "#111"
            }`,
          }}
        >
          {vote_average}
        </div>
        <div className="movie-card-info">
          <p className="title">{title}</p>
          <ul>
            <li>{duration}</li>
            <li>{genre}</li>
            <li>{release_date}</li>
          </ul>
          <div className="details">
            <p className="summary">
              {overview.substring(0, overview.indexOf("."))}.
            </p>
            <button className="button">See More</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cards;
