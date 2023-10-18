import React, { useState } from "react";
import "../style/accordion22.css";

const Accordion22 = ({
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
          <table>
            <tr>
              <td id="ibutton">></td>
              <td id="i1">{location}</td>
              <td id="i2">{yearProcent}</td>
              <td id="i3">{monthProcent}</td>
              <td className="ii1"></td>
              <td className="ii1"></td>
              <td id="i4">{callsSum}</td>
              <td id="i5">{totDSum}</td>
              <td className="ii2"></td>
              <td id="i6">{avgCallSum}</td>
              <td id="i7">{reachSum}</td>
              <td className="ii2"></td>
              <td className="ii2"></td>
              <td id="i8">{notRepliedSum}</td>
              <td id="i9">{ringTimeSum}</td>
              <td id="i10">{callsInSum}</td>
              <td className="ii2"></td>
              <td className="ii1"></td>
              <td className="ii1"></td>
              <td className="ii2"></td>
              <td className="ii2"></td>
              <td className="ii1"></td>
              <td className="ii1"></td>
              <td id="i11">{timePaidSum}</td>
              <td id="i12">{bonusEurSum}</td>
              <td id="i13">{czkSum}</td>
              <td className="ii1"></td>
              <td className="ii1"></td>
            </tr>
          </table>
        </div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <div className="accordion-content">
          <table>
            <tr>
              <td id="l1" className="location">{content.location}</td>
              <td id="l2" className="personName">{content.personName}</td>
              <td id="l3" className="start">{content.start}</td>
              <td id="l4" className="end">{content.end}</td>
              <td id="l5" className="calls">{content.calls}</td>
              <td id="l6" className="totD">{content.totD}</td>
              <td id="l7" className="totCallTime">{content.totCallTime}</td>
              <td id="l8" className="avgCall">{content.avgCall}</td>
              <td id="l9" className="reach">{content.reach}</td>
              <td id="l10" className="callsOut">{content.callsOut}</td>
              <td id="l11" className="replied1">{content.replied1}</td>
              <td id="l12" className="notReplied">{content.notReplied}</td>
              <td id="l13" className="ringTime">{content.ringTime}</td>
              <td id="l14" className="callsIn">{content.callsIn}</td>
              <td id="l15" className="replied2">{content.replied2}</td>
              <td id="l16" className="out">{content.out}</td>
              <td id="l17" className="in">{content.in}</td>
              <td id="l18" className="potRes">{content.potRes}</td>
              <td id="l19" className="potCont">{content.potCont}</td>
              <td id="l20" className="crea">{content.crea}</td>
              <td id="l21" className="transl">{content.transl}</td>
              <td id="l22" className="timePaid">{content.timePaid}</td>
              <td id="l23" className="bonusEur">{content.bonusEur}</td>
              <td id="l24" className="czk">{content.czk}</td>
              <td id="l25" className="emr">{content.emr}</td>
              <td id="l26" className="ems">{content.ems}</td>
            </tr>
          </table>
        </div>
      )}
    </div>
  );
};

export default Accordion22;
