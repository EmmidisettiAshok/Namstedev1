import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: { name: "" },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/EmmidisettiAshok");
    const json = await data.json();

    console.log(json);
    this.setState({ userInfo: json });
  }

  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    const { login, type, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h1>Name : {login}</h1>
        <h2>Location : {type}</h2>
        <h3>Contact : Ashok@gmail.com</h3>
      </div>
    );
  }
}

// ldfkld

// Mounting lifecycle

// Constructor (dummy)
// Render (dummy)
//   <Html Dummy>
// componentDidMount
//    <API call>
//     <this.setState >  -> state variable updated

//  ------- Update cycle -------

//   render (APi data)
//   <HTML (new ta)>
//  componentDidUpdate

export default UserClass;
