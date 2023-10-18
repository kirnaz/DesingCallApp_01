import "./Main.css";
import "./style/tools-bar.css";
import React from "react";

function ToolsBar() {
  return (
    <div className="tools_bar">
        <div className="results_tool" id="tools_bar">Results</div>
        <div className="contacts_tool" id="tools_bar">Contacts</div>
        <div className="call_campaigns_tool" id="tools_bar">Call Campaings</div>
        <div className="worker_stats_tool" id="tools_bar">Worker Stats</div>
        <div className="tutorials_tool" id="tools_bar">Tutorials</div>
    </div>
  );
}

export default ToolsBar;
