import "../styles/Backdrop.css";
import sampleImage from "../assets/images/sample1.jpg";
function Backdrop() {
  return (
    <div className="back-div">
      <Image image={sampleImage} />
    </div>
  );
}

const Image = (props) => {
  return (
    <div>
      <img src={props.image} alt="" className="image-bg" />
    </div>
  );
};

export default Backdrop;
