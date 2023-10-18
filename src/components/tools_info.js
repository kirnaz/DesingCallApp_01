import "../Main.css";
import React from "react";
import "../style/tools_info.css"
import image from "../img/Vector.svg";


function ToolsInfo() {
  return (
    <div className="tools-info">
        <div className="stats_info"><img className="info_vector" src={image} alt="info vector" />stats info</div>
        <div className="worker">worker</div>
        <div className="market">market</div>
    </div>
  );
}

export default ToolsInfo;