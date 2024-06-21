import { render } from "react-dom";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('parent componentDidMount');
  }
  render() {
    return (
      <div>
        <h2>About us</h2>
        <h3>This is the namste dev web series</h3>
        {/* <User name={"Ashok (function)"} /> */}
        <UserClass name={"Ashok (class)"} location={"Viskhaptanam"} />
      </div>
    );
  }
}
// const About = () => {
//   return (
//     <div>
//       <h2>About us</h2>
//       <h3>This is the namste dev web series</h3>
//       {/* <User name={"Ashok (function)"} /> */}
//       <UserClass name={"Ashok (class)"} location ={"Viskhaptanam"}/>
//     </div>
//   );
// };

// React lifeCycle

//   - Parent constructor
//   - Parent render
//      - First constructor
//      - First Render
        
    //  - Second Constructor
    //  - Second render

    //  < Dom update in Single Batch />

    //  -  First componentDidMount 
    //  -  Second componentDidMount

    //- Parent componentDidMount   
  



export default About;
