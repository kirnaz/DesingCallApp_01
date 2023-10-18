import "./Main.css";
import "./style/tools-bar2.css";
import React from "react";
import Calendar from "./components/calendar";
import PageCounter from "./components/page_counter";
import ToolsInfo from "./components/tools_info";


function ToolsBar2() {
  return (
    <div className="tools_bar2">
        <PageCounter />
        <Calendar />
        <ToolsInfo />
    </div>
  );
}

export default ToolsBar2;