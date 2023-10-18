import "../Main.css";
import React from "react";
import "../style/tools_info.css";
import "../style/info_bar2.css";
import Accordion21 from "./accordion21";

function InfoBar2() {
  return (
    <div className="allOf">
      <div className="main-table">
        <table id="table">
          <tr>
            <td id="column01">Results</td>
            <td id="column02">Year</td>
            <td id="column03">Month</td>
            <td id="column04">Start</td>
            <td id="column05">End</td>
            <td id="column06">Calls</td>
            <td id="column07">Tot D</td>
            <td id="column08">Tot call time</td>
            <td id="column09">AVG call</td>
            <td id="column10">Reach</td>
            <td id="column11">Calls out</td>
            <td id="column12">Replied</td>
            <td id="column13">Not replied</td>
            <td id="column14">Ring time</td>
            <td id="column15">Calls in</td>
            <td id="column16">Replied</td>
            <td id="column17">OUT</td>
            <td id="column18">IN</td>
            <td id="column19">Pot res</td>
            <td id="column20">Pot>Cont</td>
            <td id="column21">Crea</td>
            <td id="column22">Transl</td>
            <td id="column23">Time paid</td>
            <td id="column24">Bonus EUR</td>
            <td id="column25">CZK</td>
            <td id="column26">EMR</td>
            <td id="column27">EMS</td>
          </tr>
        </table>
      </div>
      <div>
        <Accordion21 />
      </div>
    </div>
  );
}

export default InfoBar2;
