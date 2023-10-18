import "../Main.css";
import React from "react";
import "../style/page_counter.css";
import image0 from "../img/arrows/Group 39.svg";
import image1 from "../img/arrows/Line 6.svg";

function PageCounter() {
  return (
    <div className="page-counter">
      <img className="left_arrow" src={image0} alt="arrow2" />
      <img className="left_arrow" src={image1} alt="arrow1" />
      <div className="page_index">
        <div className="row">
          <div className="column">1</div>
          <div>/</div>
          <div className="column">31</div>
        </div>
      </div>
      <img className="right_arrow" src={image1} alt="arrow1" />
      <img className="right_arrow" src={image0} alt="arrow2" />
    </div>
  );
}

export default PageCounter;
