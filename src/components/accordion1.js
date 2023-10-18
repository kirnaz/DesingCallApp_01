import React, { useState } from "react";
import "../style/accordion1.css";

const Accordion1 = ({
  location,
  yearProcent,
  monthProcent,
  callsSum,
  totDSum,
  avgCallSum,
  reachSum,
  notRepliedSum,
  ringTimeSum,
  callsInSum,
  timePaidSum,
  bonusEurSum,
  czkSum,
  content,
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div className="header_bar">
          <div id="i1">{location}</div>
          <div id="i2">{yearProcent}</div>
          <div id="i3">{monthProcent}</div>
          <div id="i4">{callsSum}</div>
          <div id="i5">{totDSum}</div>
          <div id="i6">{avgCallSum}</div>
          <div id="i7">{reachSum}</div>
          <div id="i8">{notRepliedSum}</div>
          <div id="i9">{ringTimeSum}</div>
          <div id="i10">{callsInSum}</div>
          <div id="i11">{timePaidSum}</div>
          <div id="i12">{bonusEurSum}</div>
          <div id="i13">{czkSum}</div>
          <div id="i15">-</div>
        </div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <div className="accordion-content">
          <div className="location">{content.location}</div>
          <div className="personName">{content.personName}</div>
          <div className="start">{content.start}</div>
          <div className="end">{content.end}</div>
          <div className="calls">{content.calls}</div>
          <div className="totD">{content.totD}</div>
          <div className="totCallTime">{content.totCallTime}</div>
          <div className="avgCall">{content.avgCall}</div>
          <div className="reach">{content.reach}</div>
          <div className="callsOut">{content.callsOut}</div>
          <div className="replied1">{content.replied1}</div>
          <div className="notReplied">{content.notReplied}</div>
          <div className="ringTime">{content.ringTime}</div>
          <div className="callsIn">{content.callsIn}</div>
          <div className="replied2">{content.replied2}</div>
          <div className="out">{content.out}</div>
          <div className="in">{content.in}</div>
          <div className="potRes">{content.potRes}</div>
          <div className="potCont">{content.potCont}</div>
          <div className="crea">{content.crea}</div>
          <div className="transl">{content.transl}</div>
          <div className="timePaid">{content.timePaid}</div>
          <div className="bonusEur">{content.bonusEur}</div>
          <div className="czk">{content.czk}</div>
          <div className="emr">{content.emr}</div>
          <div className="ems">{content.ems}</div>
        </div>
      )}
    </div>
  );
};

export default Accordion1;
