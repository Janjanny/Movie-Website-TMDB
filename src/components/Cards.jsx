import "../styles/Card.css";

function Cards({ movieList }) {
  return (
    <>
      {movieList.map((movie, i) => (
        <div
          className="movie-card"
          key={i}
          style={{
            background: `url(${movie.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <div
            className="rating"
            style={{
              backgroundColor: `${
                movie.rating / 10 >= 5.0 && movie.rating / 10 <= 5.9
                  ? "#D9AD00"
                  : movie.rating / 10 >= 6.0 && movie.rating / 10 <= 6.9
                  ? "#D9AD00"
                  : movie.rating / 10 >= 7.0 && movie.rating / 10 <= 7.9
                  ? "#00D900"
                  : movie.rating / 10 >= 8.0 && movie.rating / 10 <= 8.9
                  ? "#00D900"
                  : movie.rating / 10 >= 9.0 && movie.rating / 10 <= 10.0
                  ? "#00D900"
                  : "#eee"
              }`,
            }}
          >
            {movie.rating / 10}
          </div>
          <div className="movie-card-info">
            <p className="title">{movie.title}</p>
            <ul>
              <li>{movie.duration}</li>
              <li>{movie.genre}</li>
              <li>{movie.year}</li>
            </ul>
            <div className="details">
              <p className="summary">
                {movie.summary.substring(0, movie.summary.indexOf("."))}.
              </p>
              <button className="button">See More</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default Cards;
