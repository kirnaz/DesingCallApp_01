import "./Main.css";
import logo from "./img/LOGO.svg";
import "./style/roof.css";

function Main() {
  return (
    <div className="Main">
      <div className="roof">
        <div className="brand_logo">
          <img src={logo} alt="Brand logo" />
          <span className="brand_name">Call center </span>
        </div>
      </div>
    </div>
  );
}

export default Main;
