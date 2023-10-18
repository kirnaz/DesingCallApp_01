import "../Main.css";
import React from "react";
import "../style/tools_info.css";
import "../style/info_bar.css";
import Accordion from "./accordion";


function InfoBar() {
  return (
    <div className="allOf">
      <div className="info_bar">
        <div className="info-results">Results</div>
        <div className="info-year">Year</div>
        <div className="info-month">Month</div>
        <div className="info-start">Start</div>
        <div className="info-end">End</div>
        <div className="info-calls">Calls</div>
        <div className="info-tot-d">Tot D</div>
        <div className="info-tot-call-time">Tot call time</div>
        <div className="info-avg-call">AVG call</div>
        <div className="info-reach">Reach</div>
        <div className="info-calls-out">Calls out</div>
        <div className="info-replied-1">Replied</div>
        <div className="info-not-replied">Not replied</div>
        <div className="info-ring-time">Ring time</div>
        <div className="info-calls-in">Calls in</div>
        <div className="info-replied-2">Replied</div>
        <div className="info-out">OUT</div>
        <div className="info-in">IN</div>
        <div className="info-potres">Pot res</div>
        <div className="info-pot-cont">Pot>Cont</div>
        <div className="info-crea">Crea</div>
        <div className="info-transl">Transl</div>
        <div className="info-time-paid">Time paid</div>
        <div className="info-bonus-eur">Bonus EUR</div>
        <div className="info-czk">CZK</div>
        <div className="info-emr">EMR</div>
        <div className="info-ems">EMS</div>
      </div>
      <div>
        <Accordion />
      </div>
    </div>
  );
}

export default InfoBar;
