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
  const periodsCount = overview.split(".").length;
  console.log(periodsCount);
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
          {vote_average.toFixed(1)}
        </div>
        <div className="movie-card-info">
          <p className="title">{title}</p>
          <ul>
            <li>{genre?.join(" ")}</li>
            <li>{release_date.substring(0, 4)}</li>
          </ul>
          <div className="details">
            <p className="summary">
              {periodsCount > 2
                ? overview.substring(0, overview.indexOf("."))
                : overview}
              .
            </p>
            <button className="button">See More</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cards;
