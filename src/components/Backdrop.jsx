import "../styles/Backdrop.css";
import Slider from "./Slider";

function Backdrop() {
  return (
    <div className="container">
      <div
        className="back-div"
        style={{ backgroundImage: "url(src/assets/images/sample1.jpg)" }}
      >
        <div className="movie">
          <div className="details">
            <h1 className="title">Avatar: The Way of The Water</h1>
            <div className="rating">
              <div className="circle">
                <p className="rate">
                  77<span className="percent">%</span>
                </p>
              </div>

              <div className="movie-info">
                <ul>
                  <li>User Rating</li>
                  <li className="date">12/14/2022(PH)</li>
                  <li className="genre">Science Fiction, Adventure, Action</li>
                  <li className="duration">3h 12m</li>
                </ul>
              </div>
            </div>
            <div className="description">
              <p>
                Set more than a decade after the events of the first film, learn
                the story of the Sully family (Jake, Neytiri, and their kids),
                the trouble that follows them, the lengths they go to keep each
                other safe, the battles they fight to stay alive, and the
                tragedies they endure.
              </p>
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
