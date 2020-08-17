import React, { Component } from "react";
import HomeUI from "../ComponentUI/HomeUI";

export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <HomeUI propForHistory={this.props}></HomeUI>
      </React.Fragment>
    );
  }
}

export default Home;
