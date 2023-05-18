import "../styles/Backdrop.css";
import Slider from "./Slider";
import { featured_movies } from "../data";

function Backdrop() {
  const movie = featured_movies[0];
  return (
    <div className="container">
      <div
        className="back-div"
        style={{ backgroundImage: "url(src/assets/images/sample1.jpg)" }}
      >
        <div className="movie">
          <div className="details">
            <h1 className="title">{movie.title}</h1>
            <div className="rating">
              <div className="circle">
                <p className="rate">
                  {movie.rating}
                  <span className="percent">%</span>
                </p>
              </div>

              <div className="movie-info">
                <ul>
                  <li>User Rating</li>
                  <li className="date">{movie.date}</li>
                  <li className="genre">{movie.genre}</li>
                  <li className="duration">{movie.duration}</li>
                </ul>
              </div>
            </div>
            <div className="description">
              <p>{movie.summary}</p>
            </div>
            <div className="buttons">
              <button className="play-btn button">Play Now</button>
              <button className="trailet-btn button-gray">Watch Trailer</button>
            </div>
          </div>
          <Slider />
        </div>
        <div className="filter"></div>
      </div>
    </div>
  );
}

export default Backdrop;
