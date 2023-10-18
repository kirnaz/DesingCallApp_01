import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import reportWebVitals from './reportWebVitals';
import ToolsBar from './ToolsBar';
import ToolsBar2 from './ToolsBar2';
// import InfoBar from './components/info_bar';
import InfoBar2 from './components/info_bar2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
    <ToolsBar />
    <ToolsBar2 />
    {/* <InfoBar /> */}
    <InfoBar2 />
  </React.StrictMode>
);

reportWebVitals();
