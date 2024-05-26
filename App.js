import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{id:"heading",abc:"xyz"},"Hello world from React 12345");

const span1 = <span>React element</span>

//React element
const jsxHeading = (<h1  className="head" tabIndex="5">
    Namste react javascript </h1>);
//jsx is not javascript or html
// Babel transpile jsx into javascript file

//Normal functions
//function has to return is mandatory 

const HeadingComponent3 = function () {
    return ( <div id="container"><h2 className="head">Namste react javascript1</h2></div> );
}


//React functional component
// React funcational component always start with capital letter
//React is 
const HeadingComponent = () => {
     return (<div id="container"><h2 className="head">Namste react javascript1</h2></div>) ;
}


//Component compision
const HeadingComponent2 = () => { return (<div><HeadingComponent/><h1>Namste react javascript2</h1>{jsxHeading}{span1}</div>) }


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2/>);