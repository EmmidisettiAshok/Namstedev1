import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h1",{id:"heading",abc:"xyz"},"Hello world from React 12345");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);