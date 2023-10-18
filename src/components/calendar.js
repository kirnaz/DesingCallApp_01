import "../Main.css";
import React from "react";
import "../style/calendar.css";
import image1 from "../img/arrows/Line 6.svg";

function Calendar() {
  return (
    <div className="calendar">
      <img className="left_arrow1" src={image1} alt="arrow1" />
      <div> <div className="calstyle">MO 4.9.23</div></div>
      <img className="right_arrow1" src={image1} alt="arrow1" />
    </div>
  );
}

export default Calendar;
