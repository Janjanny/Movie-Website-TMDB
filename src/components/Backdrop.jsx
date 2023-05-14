import "../styles/Backdrop.css";

function Backdrop() {
  return (
    <div className="container">
      <div
        className="back-div"
        style={{ backgroundImage: "url(src/assets/images/sample1.jpg)" }}
      >
        <div className="filter"></div>
      </div>
    </div>
  );
}

export default Backdrop;
