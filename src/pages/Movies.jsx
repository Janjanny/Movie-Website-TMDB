import "../styles/Movies.css";

function Movies() {
  return (
    <>
      <div className="movie-container">
        <div className="search-bar">
          <div className="icon">
            <ion-icon name="search-outline"></ion-icon>
          </div>
          <input type="search" placeholder="Search..." />
          <hr className="search-bar-divider" />
          <div className="dropdown-menu">
            <ul>
              <li>Movies</li>
              <li>Series</li>
              <li>People</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Movies;
