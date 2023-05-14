import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="contents">
        <div className="logo">
          <img src="src/assets/images/logo.png" alt="" />
        </div>
        <ul className="nav-links">
          <a href="">Featured</a>
          <a href="">Movies</a>
          <a href="">Series</a>
          <a href="">People</a>
          <a href="">Search</a>
          <button>Login</button>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
