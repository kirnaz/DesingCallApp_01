import "../Main.css";
import React from "react";
import "../style/tools_info.css";
import "../style/info_bar3.css";
import accordionButton from "../img/Button.svg";

// const accordionData = [
//   {
//     location: "DE",
//     yearProcent: "97%",
//     monthProcent: "62%",
//     callsSum: "76",
//     totDSum: "51",
//     avgCallSum: "64",
//     reachSum: "87%",
//     notRepliedSum: "0",
//     ringTimeSum: "61",
//     callsInSum: "99",
//     timePaidSum: "1:33",
//     bonusEurSum: "4",
//     czkSum: "236",
//     content: {
//       location: "HD",
//       personName: "Hana Dobiasova",
//       start: "9:58",
//       end: "19:04",
//       calls: "20",
//       totD: "58",
//       totCallTime: "00:00",
//       avgCall: "51",
//       reach: "19%",
//       callsOut: "59",
//       replied1: "1",
//       notReplied: "0",
//       ringTime: "38",
//       callsIn: "72",
//       replied2: "10",
//       out: "0:01",
//       in: "00:00",
//       potRes: "1:33",
//       potCont: "00:00",
//       crea: "00:00",
//       transl: "00:00",
//       timePaid: "1:33",
//       bonusEur: "6",
//       czk: "37",
//       emr: "1%",
//       ems: "74%",
//     },
//   },
// ];

function visibleWorkers() {
  if (
    (document.getElementById("accordion-button").style.transform ===
      "rotate(180deg)")
  ) {
    document.getElementById("i888").style.display = "none";
    document.getElementById("i999").style.display = "none";
    document.getElementById("i444").style.display = "none";
    document.getElementById("accordion-button").style.transform =
      "rotate(0deg)";
    return;
  }
  else {
    document.getElementById("i888").style.display = "table-row";
    document.getElementById("i999").style.display = "table-row";
    document.getElementById("i444").style.display = "table-row";
    document.getElementById("accordion-button").style.transform =
      "rotate(180deg)";
    return;
  }
}

function InfoBar3() {
  return (
    <div className="allOf">
      <div className="main-table">
        <table id="table">
          <tr id="i555">
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
          <tr id="i777">
            <td id="ibutton">
              <img
                id="accordion-button"
                src={accordionButton}
                alt="accordion button"
                onClick={visibleWorkers}
              />
              <span className="location_abbreviation">DE</span>
            </td>
            <td id="i2"><span id="percent_color">87%</span></td>
            <td id="i3"><span id="percent_color">76%</span></td>
            <td className="ii2"></td>
            <td className="ii1"></td>
            <td id="i4">76</td>
            <td id="i5">51</td>
            <td className="ii5"></td>
            <td id="i6">64</td>
            <td id="i7">87%</td>
            <td className="ii3"></td>
            <td className="ii5"></td>
            <td id="i8">0</td>
            <td id="i9">61</td>
            <td id="i10">99</td>
            <td className="ii4"></td>
            <td className="ii5"></td>
            <td className="ii5"></td>
            <td className="ii5"></td>
            <td className="ii5"></td>
            <td className="ii5"></td>
            <td className="ii5"></td>
            <td id="i11">1:33</td>
            <td id="i12">4</td>
            <td id="i13">236</td>
            <td className="ii5"></td>
            <td className="ii5"></td>
          </tr>
          <tr id="i888">
            <td id="l1" className="location">
              HD
            </td>
            <td id="l2" className="personName" colspan="2">
              Hana Dobiasova
            </td>
            <td id="l3" className="start">
              9:58
            </td>
            <td id="l4" className="end">
              19:03
            </td>
            <td id="l5" className="calls">
              20
            </td>
            <td id="l6" className="totD">
              58
            </td>
            <td id="l7" className="totCallTime">
              00:00
            </td>
            <td id="l8" className="avgCall">
              51
            </td>
            <td id="l9" className="reach">
              19%
            </td>
            <td id="l10" className="callsOut">
              59
            </td>
            <td id="l11" className="replied1">
              1
            </td>
            <td id="l12" className="notReplied">
              0
            </td>
            <td id="l13" className="ringTime">
              38
            </td>
            <td id="l14" className="callsIn">
              72
            </td>
            <td id="l15" className="replied2">
              10
            </td>
            <td id="l16" className="out">
              00:01
            </td>
            <td id="l17" className="in">
              00:00
            </td>
            <td id="l18" className="potRes">
              1:33
            </td>
            <td id="l19" className="potCont">
              00:00
            </td>
            <td id="l20" className="crea">
              00:00
            </td>
            <td id="l21" className="transl">
              00:00
            </td>
            <td id="l22" className="timePaid">
              1:33
            </td>
            <td id="l23" className="bonusEur">
              6
            </td>
            <td id="l24" className="czk">
              37
            </td>
            <td id="l25" className="emr">
              1%
            </td>
            <td id="l26" className="ems">
              74%
            </td>
          </tr>
          <tr id="i999">
            <td id="l1" className="location">
              IT
            </td>
            <td id="l2" className="personName" colspan="2">
              Ivana Tucak
            </td>
            <td id="l3" className="start">
              9:58
            </td>
            <td id="l4" className="end">
              19:04
            </td>
            <td id="l5" className="calls">
              18
            </td>
            <td id="l6" className="totD">
              53
            </td>
            <td id="l7" className="totCallTime">
              00:00
            </td>
            <td id="l8" className="avgCall">
              62
            </td>
            <td id="l9" className="reach">
              80%
            </td>
            <td id="l10" className="callsOut">
              59
            </td>
            <td id="l11" className="replied1">
              1
            </td>
            <td id="l12" className="notReplied">
              0
            </td>
            <td id="l13" className="ringTime">
              19
            </td>
            <td id="l14" className="callsIn">
              72
            </td>
            <td id="l15" className="replied2">
              10
            </td>
            <td id="l16" className="out">
              00:01
            </td>
            <td id="l17" className="in">
              00:00
            </td>
            <td id="l18" className="potRes">
              2:10
            </td>
            <td id="l19" className="potCont">
              00:00
            </td>
            <td id="l20" className="crea">
              00:00
            </td>
            <td id="l21" className="transl">
              00:00
            </td>
            <td id="l22" className="timePaid">
              1:33
            </td>
            <td id="l23" className="bonusEur">
              6
            </td>
            <td id="l24" className="czk">
              37
            </td>
            <td id="l25" className="emr">
              1%
            </td>
            <td id="l26" className="ems">
              21%
            </td>
          </tr>
          <tr id="i444">
            <td id="l1" className="location">
              JK
            </td>
            <td id="l2" className="personName" colspan="2">
              Jakub Kuleta
            </td>
            <td id="l3" className="start">
              9:58
            </td>
            <td id="l4" className="end">
              19:04
            </td>
            <td id="l5" className="calls">
              36
            </td>
            <td id="l6" className="totD">
              0
            </td>
            <td id="l7" className="totCallTime">
              00:00
            </td>
            <td id="l8" className="avgCall">
              41
            </td>
            <td id="l9" className="reach">
              104%
            </td>
            <td id="l10" className="callsOut">
              59
            </td>
            <td id="l11" className="replied1">
              1
            </td>
            <td id="l12" className="notReplied">
              0
            </td>
            <td id="l13" className="ringTime">
              49
            </td>
            <td id="l14" className="callsIn">
              72
            </td>
            <td id="l15" className="replied2">
              10
            </td>
            <td id="l16" className="out">
              00:01
            </td>
            <td id="l17" className="in">
              00:00
            </td>
            <td id="l18" className="potRes">
              0:23
            </td>
            <td id="l19" className="potCont">
              00:00
            </td>
            <td id="l20" className="crea">
              00:00
            </td>
            <td id="l21" className="transl">
              00:00
            </td>
            <td id="l22" className="timePaid">
              1:33
            </td>
            <td id="l23" className="bonusEur">
              6
            </td>
            <td id="l24" className="czk">
              37
            </td>
            <td id="l25" className="emr">
              1%
            </td>
            <td id="l26" className="ems">
              8%
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default InfoBar3;
